
exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('user_roles', (table) => {
      table.increments('id').primary();
      table.string('user_role');
    });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists('user_roles');
};
