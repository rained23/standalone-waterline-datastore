import Waterline from 'waterline';

const userCollection = Waterline.Collection.extend({
  identity: 'user',
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
    email: {
      type: 'string',
      required: true,
      autoMigrations: { unique: true },
      validations: { isEmail: true },
    },
    createdAt: {
      type: 'number',
      autoCreatedAt: true,
    },
    updatedAt: {
      type: 'number',
      autoUpdatedAt: true,
    },
    pets: {
      collection: 'pet',
      via: 'owner',
    },
  },
});

export default userCollection;
