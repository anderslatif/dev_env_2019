/*eslint-disable*/
const roles = require('../../roles');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_roles').del()
    .then(() =>
      // Inserts seed entries
      knex('user_roles').insert(roles.roles));
};
