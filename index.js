const app = require("express")();
const consign = require("consign");
const db = require("./config/db");
const port = 3800;
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./config/swagger.json')

/*
 * Consign hace que las aplicaciones sean más fáciles de desarrollar con lógica
 * separación de archivos y carga automática de scripts
 */


app.db = db;
app.swaggerUi = swaggerUi;
app.swaggerDocument = swaggerDocument;



consign()
  .include("./config/passport.js")
  .then("./config/middlewares.js")
  .then("./api/validation.js")
  .then("./api")  
  .then("./config/routes.js")
  .into(app);

app.listen(port, () => {
  console.log(`## Backend ejecutándose en el puerto: ${port} ## `);
});
