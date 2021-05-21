
exports.up = function(knex) {
    return knex.schema.createTable('bids', function(table){
        table.increments('id');
        table.decimal('valor').notNullable();
        table.integer('idUser').notNullable();
        table.integer('idGift').notNullable();
        table.foreign('idUser').references('id').inTable('users');
        table.foreign('idGift').references('id').inTable('gifts');

    });
};

exports.down = function(knex) {
    knex.schema.dropTable('bids');
};
