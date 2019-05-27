
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('warehouse_chemicals').del()
    .then(() =>
      // Inserts seed entries
      knex('warehouse_chemicals').insert([
          // { id: 1, chemical_id: '1', quantity: 10, warehouse_id: 1 },
          // { id: 2, chemical_id: '2', quantity: 15, warehouse_id: 2 },
      ]));
};
