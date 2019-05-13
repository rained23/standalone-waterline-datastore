import Waterline from 'waterline';

const petCollection = Waterline.Collection.extend({
  identity: 'pet',
  datastore: 'default',
  primaryKey: 'id',
  schema: true,
  attributes: {
    id: {
      type: 'number',
      autoMigrations: { autoIncrement: true },
    },
    name: {
      type: 'string',
      required: true,
    },
    createdAt: {
      type: 'number',
      autoCreatedAt: true,
    },
    updatedAt: {
      type: 'number',
      autoUpdatedAt: true,
    },
    owner: {
      model: 'user',
      columnName: 'ownerId',
    },
  },
});

export default petCollection;
