exports.up = async (knex) => {
  await knex.schema.createTable('pet', (table) => {
    table.increments('id').primary();
    table
      .integer('ownerId')
      .notNullable()
      .unsigned();
    table.string('name').notNullable();
    table.bigInteger('createdAt').notNullable();
    table.bigInteger('updatedAt').notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('pet');
};
