
exports.up = function(knex) {
    return knex.schema.createTable('gifts', function(table){
        table.increments('id');
        
        table.string('nome').notNullable();
        table.decimal('valorInicial').notNullable();
        table.decimal('valorFinal');
        table.string('caminhoImg').notNullable();
        table.boolean('leiloando').notNullable();
        table.integer('arrematado'); //Id do Usuário que arrematou

        table.foreign('arrematado').references('id').inTable('users');

    });
};

exports.down = function(knex) {
    knex.schema.dropTable('gifts');
};
