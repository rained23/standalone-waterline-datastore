export default {
  http: {
    port: 4000,
  },
  title: 'waterline-test',
  db: {
    mongo: `mongodb://${process.env.MONGO_HOST}:27017/${process.env.MONGO_DB}`,
    mysql: {
      url: `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${
        process.env.DB_HOST
      }:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    },
  },
};
