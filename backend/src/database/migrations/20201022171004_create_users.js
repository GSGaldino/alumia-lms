
exports.up = function(knex) {
  return knex.schema.createTable('usuario', table => {
    table.increments('cod_aluno').notNullable();
    table.string('ra').unique().notNullable();
    table.string('nome').notNullable();
    table.string('sobrenome').notNullable();
    table.string('email').unique().notNullable();
    table.string('password');
    table.string('status').notNullable();
    table.string('score');
    table.string('interacao');
    table.string('telefone');
    table.string('telefone2');
    table.string('ano_ingresso');
    table.string('permissoes').notNullable();
    table.timestamp('criado_em').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
