
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('chemicals').del()
    .then(() =>
      // Inserts seed entries
      knex('chemicals').insert([
        { id: 1, label: 'A', description: "Highly volatile. Shouldn't be more stored adjacently. Notice the fire brigade if A > 15KG" },
        { id: 2, label: 'B', description: 'Should never be stored in the same warehouse as A' },
        { id: 3, label: 'C', description: '' },
      ]));
};
