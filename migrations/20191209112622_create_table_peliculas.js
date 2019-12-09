
exports.up = async function (knex, Promise) {
    return await knex.schema.createTable('peliculas', table => {
        table.increments('id').primary()
        table.string('titulo,', 1000).notNull()
        table.string('descripcion', 1000).notNull()
        table.string('generos', 1000).notNull()
        table.binary('cartel').notNull()        
    })
};

exports.down = async function (knex, Promise) {
    return await knex.schema.dropTable('peliculas')
};
