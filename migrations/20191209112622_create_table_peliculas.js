
exports.up = function (knex, Promise) {
    return knex.schema.createTable('peliculas', table => {
        table.increments('id').primary()
        table.string('titulo,', 1000).notNull()
        table.string('descripcion', 1000).notNull()
        table.string('generos', 1000).notNull()
        table.binary('cartel').notNull()        
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('peliculas')
};
