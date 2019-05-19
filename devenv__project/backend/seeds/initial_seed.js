
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')/* .del() */
    .then(() =>
      // Inserts seed entries
      knex('users').insert([ // "*********",
        { id: 1, email: 'a@a', password: '$2a$08$ZMATixRvmi60bmk3I3LQA.6wh//Iuv99d3yJhE/zQz1ZZ/Z6ezHga' },
      ]));
};
