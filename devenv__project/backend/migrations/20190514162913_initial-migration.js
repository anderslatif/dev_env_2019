
exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('sites', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('country');
      table.string('phone_number');
      table.string('address1');
      table.string('address2');
      table.integer('warehouse1');
      table.integer('warehouse2');
      table.integer('warehouse3');
      table.integer('warehouse4');
      table.integer('warehouse5');
    })
    .createTable('user_roles', (table) => {
      table.increments('id').primary();
      table.string('role_name');
    })
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('email');
      table.string('password');
      table.integer('site_id').unsigned();
      table.foreign('site_id').references('sites.id');
      table.integer('user_role_id').unsigned();
      table.foreign('user_role_id').references('user_roles.id');
      table.string('address1');
      table.string('address2');
      table.string('country');
      table.string('active_status');
      table.dateTime('timestamp');
    })
    .createTable('order_status', (table) => {
      table.increments('id').primary();
      table.string('status');
    })
    .createTable('order_types', (table) => {
      table.increments('id').primary();
      table.string('type');
    })
    .createTable('loader_assignments', (table) => {
      table.increments('id').primary();
      table.integer('assigned_by').unsigned();
      table.foreign('assigned_by').references('users.id');
      table.integer('assigned_to');
      // table.foreign('assigned_to').references('users.id');
      table.dateTime('timestamp');
    })
    .createTable('orders', (table) => {
      table.increments('id').primary();
      table.integer('order_type_id').unsigned();
      table.foreign('order_type_id').references('order_types.id');
      table.integer('created_by').unsigned();
      table.foreign('created_by').references('users.id');
      table.dateTime('timestamp');
      table.integer('site_source_id').unsigned();
      table.foreign('site_source_id').references('sites.id');
      table.integer('site_destination_id').unsigned();
      table.foreign('site_destination_id').references('sites.id');
      table.string('other_source');
      table.string('other_destination');
      table.integer('order_status_id');
      table.foreign('order_status_id').references('order_status.id');
    })
    .createTable('gate_scans', (table) => {
      table.increments('id').primary();
      table.string('scanned_by');
      // table.foreign('scanned_by').references('users.id');
      table.integer('order_id');
      // table.foreign('order_id').references('orders.id');
      table.dateTime('timestamp');
    })
    .createTable('loading_table', (table) => {
      table.increments('id').primary();
      table.integer('loaded_by');
      // table.foreign('loaded_by').references('users.id');
      table.integer('order_id');
      // table.foreign('order_id').references('orders.id');
      table.dateTime('timestamp');
    });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists('loading_table')
    .dropTableIfExists('gate_scans')
    .dropTableIfExists('orders')
    .dropTableIfExists('loader_assignments')
    .dropTableIfExists('order_types')
    .dropTableIfExists('order_status')
    .dropTableIfExists('users')
    .dropTableIfExists('user_roles')
    .dropTableIfExists('sites');
};
