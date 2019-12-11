module.exports = app => {
  // Public URLs
  app.post("/signup", app.api.user.save);
  app.post("/signin", app.api.auth.signin);
  app.post("/validateToken", app.api.auth.validateToken);
  app.get("/peliculas", app.api.peliculas.get);
  app.get("/peliculas/titulo", app.api.peliculas.getByName);
  app.get("/peliculas/generos", app.api.peliculas.getByGeneros);

 // Api documentation
  app.use("/apidoc", app.swaggerUi.serve, app.swaggerUi.setup(app.swaggerDocument))

  // Private URLs
  app
    .route("/pelicula")
    .all(app.config.passport.authenticate())
    .post(app.api.peliculas.save);

  app
    .route("/pelicula/:id")
    .all(app.config.passport.authenticate())
    .put(app.api.peliculas.save)
    .delete(app.api.peliculas.remove);
  app
    .route("/users")
    .all(app.config.passport.authenticate())
    .get(app.api.user.get)
    
  app
    .route("/user/:id")
    .all(app.config.passport.authenticate())    
    .put(app.api.user.save)
    .delete(app.api.user.remove);
};
