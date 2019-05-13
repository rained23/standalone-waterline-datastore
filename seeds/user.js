exports.seed = async (knex) => {
  await knex('user').truncate();
  await knex('user').insert([
    {
      name: 'test1',
      email: 'test@test.com',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
    {
      name: 'test2',
      email: 'test2@test.com',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
    {
      name: 'test3',
      email: 'test3@test.com',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
  ]);
};
