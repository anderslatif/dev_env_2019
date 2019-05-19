
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_roles').del()
    .then(() =>
      // Inserts seed entries
      knex('user_roles').insert([
        { id: 1, role_name: 'ADMIN' },
        { id: 2, role_name: 'HR' },
        { id: 3, role_name: 'SALES' },
        { id: 4, role_name: 'GATE_OFFICER' },
        { id: 5, role_name: 'WAREHOUSE_LOADER' },
        { id: 6, role_name: 'WAREHOUSE_DISPATCHER' },
      ]));
};
