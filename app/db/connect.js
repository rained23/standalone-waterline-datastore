import Waterline from 'waterline';
import mysqlAdapter from 'sails-mysql';
import mongoAdapter from 'sails-mongo';
import { app } from '../app';
import dfaultConfig from '../config';
import * as models from '../models';

const mysqlConfig = dfaultConfig.db.mysql;
const mongoConfig = dfaultConfig.db.mongo;

const waterline = new Waterline();

const config = {
  adapters: {
    'sails-mysql': mysqlAdapter,
    'sails-mongo': mongoAdapter,
  },
  datastores: {
    default: {
      adapter: 'sails-mysql',
      url: mysqlConfig.url,
    },
    mongo: {
      adapter: 'sails-mongo',
      url: mongoConfig,
    },
  },
};

// eslint-disable-next-line import/prefer-default-export
export const listen = () => {
  Object.entries(models).forEach((model) => {
    waterline.registerModel(model[1]);
  });

  waterline.initialize(config, async (err, ontology) => {
    if (err) {
      throw err;
    }

    app.set('models', ontology.collections);
  });

  console.log('Server is connected to the DB');
};
