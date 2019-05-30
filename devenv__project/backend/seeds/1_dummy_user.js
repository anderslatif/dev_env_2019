/*eslint-disable*/
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() =>
      // Inserts seed entries
      knex('users').insert([ // "password",
        { id: 1, email: 'a@a', password: '$2a$08$RLyqMWTcGloPGuDzt90HFuDI2aqTM5Tc2OFxhYs0nxCBDBypvqqli', user_role_id: 1 },
      ]));
};
