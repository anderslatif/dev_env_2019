/*eslint-disable*/
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('sites').del()
    .then(() =>
      // Inserts seed entries
      knex('sites').insert([
        {
          id: 1,
          name: 'Rødovre Chemical Engros',
          country: 'Denmark',
          phone_number: '0045-273432980',
          address1: '',
          address2: '',
          zip_code: '2610',
        },
        {
          id: 2,
          name: 'Frankfurt',
          country: 'Germany',
          phone_number: '0049-98423456',
          address1: '',
          address2: '',
          zip_code: '3912-81',
        },
        {
          id: 3,
          name: 'Oxford',
          country: 'England',
          phone_number: '0044-32478927',
          address1: '',
          address2: '',
          zip_code: 'DE55 4SW',
        },
      ]));
};
