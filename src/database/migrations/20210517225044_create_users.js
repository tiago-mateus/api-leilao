
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
      table.increments('id');
      table.string('nome').notNullable();
      table.string('apelido').notNullable();
      table.string('telefone1').notNullable();
      table.string('telefone2').notNullable();
      table.string('cpf').notNullable();
      table.string('senha').notNullable();
      table.string('endereco').notNullable();
      table.string('bairro').notNullable();
      table.string('cidade').notNullable();

  });
};

exports.down = function(knex) {
  knex.schema.dropTable('users');
};
