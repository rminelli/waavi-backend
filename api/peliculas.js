module.exports = app => {
  const { existsOrError } = app.api.validation;
  const limit = 10; // Page the query

  const save = async (req, res) => {    
    const pelicula = {
      id: req.body.id,
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      genero: req.body.genero,
      cartel: req.body.cartel
    };    
    
    if (req.params.id) pelicula.id = req.params.id;
    try {
      existsOrError(pelicula.titulo, "Titulo no ingresado");
      existsOrError(pelicula.descripcion, "Descripcion no ingresada");
      existsOrError(pelicula.genero, "Genero no ingresado");
    } catch (msg) {
      return res.status(400).send(msg);
    }

    if (pelicula.id) {
      app
        .db("peliculas")
        .update(pelicula)
        .where({ id: pelicula.id })
        .then(_ => res.status(201).send())
        .catch(err => res.status(500).send(err));
    } else {
      app
        .db("peliculas")
        .insert(pelicula)
        .then(_ => res.status(201).send())
        .catch(err => res.status(500).send(err));
    }
  };

  const remove = async (req, res) => {
    // Remove pelicula
    try {
      existsOrError(req.params.id, "Código de pelicula no ingresado");

      const rowsDeleted = await app
        .db("peliculas")
        .where({ id: req.params.id })
        .del();

      existsOrError(rowsDeleted, "Pelicula no encontrada");

      res.status(200).send();
    } catch (msg) {
      return res.status(400).send(msg);
    }
  };

  const get = async (req, res) => {
    const page = req.query.page || 1;
    const result = await app
      .db("peliculas")
      .count("id")
      .first();
    const count = parseInt(result.count);
    const pages = Math.ceil(count / limit);

    app
      .db("peliculas")
      .limit(limit)
      .offset(page * limit - limit) // Offset for a next page record
      .then(peliculas => res.json({ data: peliculas, count, limit, pages }))
      .catch(err => res.status(500).send(err));
  };

  const getByName = (req, res) => {
    const titulo = req.headers.titulo;
    app
      .db("peliculas")
      .where({ titulo: titulo })
      .then(peliculas => res.json(peliculas))
      .catch(err => res.status(500).send(err));
  };

  const getByGeneros = (req, res) => {
    const generos = req.headers.generos.split(",");
    console.log(generos)
    app
      .db("peliculas")
      .whereIn("genero", generos)
      .then(peliculas => res.json(peliculas))
      .catch(err => res.status(500).send(err));
  };
  
  return { save, remove, get, getByName, getByGeneros };
};
