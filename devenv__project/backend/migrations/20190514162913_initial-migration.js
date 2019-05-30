/*eslint-disable*/
exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('sites', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('country');
      table.string('phone_number');
      table.string('address1');
      table.string('address2');
      table.string('zip_code');
    })
    .createTable('chemicals', (table) => {
      table.increments('id').primary();
      table.string('label');
      table.string('description');
    })
    .createTable('warehouses', (table) => {
      table.increments('id').primary();
      table.string('label');
      table.integer('storage_limit');
      table.integer('site_id').unsigned().references('sites.id');
    })
    .createTable('warehouse_chemicals', (table) => {
      table.increments('id').primary();
      table.integer('site_id').unsigned().references('sites.id');
      table.integer('chemical_id').unsigned().references('chemicals.id');
      table.integer('quantity');
      table.integer('storage_unit');
      table.integer('warehouse_id').unsigned().references('warehouses.id');
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
      table.dateTime('timestamp').defaultTo(knex.fn.now());
      table.unique(['email']);
    })
    .createTable('loader_assignments', (table) => {
      table.increments('id').primary();
      table.integer('dispatched_by').unsigned();
      table.foreign('dispatched_by').references('users.id');
      table.integer('dispatched_to').unsigned();
      table.foreign('dispatched_to').references('users.id');
      table.dateTime('timestamp').defaultTo(knex.fn.now());
    })
    .createTable('orders', (table) => {
      table.increments('id').primary();
      table.string('order_type_id'); // todo  ["incomming", "outgoing", "internal"]
      table.integer('created_by').unsigned();
      table.foreign('created_by').references('users.id');
      table.dateTime('timestamp').defaultTo(knex.fn.now());
      table.integer('site_source_id').unsigned();
      table.foreign('site_source_id').references('sites.id');
      table.integer('site_destination_id').unsigned();
      table.foreign('site_destination_id').references('sites.id');
      table.string('other_source');
      table.string('other_destination');
      table.string('order_status'); // todo  ["created", "assigned loader", "loaded", "dispatched", "gate scanned", "closed"]
    })
    .createTable('order_chemicals', (table) => {
      table.increments('id').primary();
      table.integer('order_id').unsigned().references('orders.id');
      table.integer('chemical_id').unsigned().references('chemicals.id');
    })
    .createTable('gate_scans', (table) => {
      table.increments('id').primary();
      table.integer('order_id').unsigned();
      table.foreign('order_id').references('orders.id');
      table.integer('scanned_by').unsigned();
      table.foreign('scanned_by').references('users.id');
      table.dateTime('timestamp').defaultTo(knex.fn.now());
    })
    .createTable('loading_table', (table) => {
      table.increments('id').primary();
      table.integer('order_id').unsigned();
      table.foreign('order_id').references('orders.id');
      table.integer('loaded_by').unsigned();
      table.foreign('loaded_by').references('users.id');
      table.dateTime('timestamp').defaultTo(knex.fn.now());
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
    .dropTableIfExists('warehouse_chemicals')
    .dropTableIfExists('order_chemicals')
    .dropTableIfExists('chemicals')
    .dropTableIfExists('sites');
};
