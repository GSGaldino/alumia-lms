
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('user_id').notNullable();
    table.string('email').notNullable();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
