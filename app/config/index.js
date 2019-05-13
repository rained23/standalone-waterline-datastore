import developmentConfig from './development';

export default {
  development: developmentConfig,
}[process.env.NODE_ENV || 'development'];
