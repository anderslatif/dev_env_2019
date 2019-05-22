
exports.up = function (knex, Promise) {
  return knex.schema
    .alterTable('users', (table) => {
      table.string('name');
      table.string('phone');
      table.dateTime('timestamp').defaultTo(knex.fn.now()).alter();
    });
};

exports.down = function (knex, Promise) {
  const columnsToDrop = [
    'name',
    'phone',
  ];

  return knex.schema
    .alterTable('users', (table) => {
      return Promise
        .filter(columnsToDrop, columnName => knex.schema.hasColumn(tableName, columnName))
        .then(existingColumns => knex.schema.table(tableName, (t) => {
          existingColumns.forEach((column) => {
            existingColumns.forEach(columnName => t.dropColumn(columnName));
          });
        }));
    });
};
