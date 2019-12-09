exports.up = async function(knex, Promise) {

  return await knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table.string("name").notNull();
    table.string("password").notNull();
    table
      .boolean("admin")
      .notNull()
      .defaultTo(true);
  });
};

exports.down = async function(knex, Promise) {
  return await knex.schema.dropTable("users");
};
