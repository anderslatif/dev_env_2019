/*eslint-disable*/
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('warehouses').del()
    .then(() =>
      // Inserts seed entries
      knex('warehouses').insert([
        { id: 1, label: '1', site_id: 1, storage_limit: 10 },
        { id: 2, label: '2', site_id: 1, storage_limit: 12 },
        { id: 3, label: '3', site_id: 1, storage_limit: 5 },
        { id: 4, label: '4', site_id: 1, storage_limit: 3 },
        { id: 5, label: '5', site_id: 1, storage_limit: 9 },
        { id: 6, label: '1', site_id: 2, storage_limit: 10 },
        { id: 7, label: '2', site_id: 2, storage_limit: 12 },
        { id: 8, label: '3', site_id: 2, storage_limit: 5 },
        { id: 9, label: '4', site_id: 2, storage_limit: 3 },
        { id: 10, label: '5', site_id: 3, storage_limit: 9},
        { id: 11, label: '1', site_id: 3, storage_limit: 10  },
        { id: 12, label: '2', site_id: 3, storage_limit: 12 },
        { id: 13, label: '3', site_id: 3, storage_limit: 5 },
        { id: 14, label: '4', site_id: 3, storage_limit: 3 },
        { id: 15, label: '5', site_id: 3, storage_limit: 9 },
      ]));
};
