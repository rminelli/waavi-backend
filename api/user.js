const bcrypt = require("bcrypt-nodejs");

module.exports = app => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation;

  const encryptPassword = async password => {
    const salt = bcrypt.genSaltSync(10);
    return await bcrypt.hashSync(password, salt);
  };
  const save = async (req, res) => {
    const user = { ...req.body }; // Spread operator for get body data
    if (req.params.id) user.id = req.params.id;

    try {
      existsOrError(user.name, "Nombre no ingresado");
      existsOrError(user.password, "Password no ingresado");
      existsOrError(user.confirmPassword, "Confirmación  de  contraseña inválida");
      equalsOrError(user.password, user.confirmPassword, "Las contraseñas no coincide");

      const userFromDb = await app
        .db("users")
        .where({ name: user.name })
        .first();
      if (!user.id) {
        notExistsOrError(userFromDb, "El usuario ya está registrado!");
      }
    } catch (msg) {
      return res.status(400).send(msg); // Client error
    }

    user.password = await encryptPassword(user.password);
    delete user.confirmPassword;

    if (user.id) {      
      app
        .db("users")
        .update(user)
        .where({ id: user.id })
        .then(_ => res.status(201).send(user))
        .catch(err => res.status(500).send(err));
    } else {
      app
        .db("users")
        .insert(user)
        .then(_ => res.status(201).send("insert"))
        .catch(err => res.status(500).send(err));
    }
  };

  const get = (req, res) => {
    app
      .db("users")
      .select("id", "name")
      .then(users => res.json(users))
      .catch(err => res.status(500).send(err));
  };

  const getById = (req, res) => {
    app
      .db("users")
      .select("id", "name")
      .where({ id: req.params.id })
      .first()
      .then(user => res.json(user))
      .catch(err => res.status(500).send(err));
  };

  const remove = async (req, res) => {
    // Soft delete
    try {
      const rowsUpdated = await app
        .db("users")
        .where({ id: req.params.id })
        .del();

      existsOrError(rowsUpdated, "Usuario no encontrado!");

      res.status(204).send();
    } catch (msg) {
      res.status(400).send(msg);
    }
  };

  return { save, get, getById, remove };
};
