exports.up = async function(knex, Promise) {

  return await knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table.string("name").notNull();
    table.string("password").notNull();    
  });
};

exports.down = async function(knex, Promise) {
  return await knex.schema.dropTable("users");
};
