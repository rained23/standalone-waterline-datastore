exports.up = async (knex) => {
  await knex.schema.createTable('user', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table
      .string('email')
      .notNullable()
      .unique();
    table.bigInteger('createdAt').notNullable();
    table.bigInteger('updatedAt').notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('user');
};
