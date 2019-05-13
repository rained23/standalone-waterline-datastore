exports.seed = async (knex) => {
  await knex('pet').truncate();
  await knex('pet').insert([
    {
      ownerId: 1,
      name: 'Dog',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
    {
      ownerId: 2,
      name: 'Cat',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
    {
      ownerId: 3,
      name: 'Pikachu',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
  ]);
};
