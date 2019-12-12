/*
 * Edite su configuración en el archivo .env para apuntar a su base de datos postgres,
 * utilizando su nombre de usuario y contraseña de db.
 * 
 * No olvides crear tu base de datos localmente!
*/

const { db } = require("./.env_file");

module.exports = {
  client: "postgresql",
  connection: db,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
