require('dotenv').config(); // usado para tomar el archivo .env y configurarar las variables de entorno

const env = process.env.NODE_ENV || 'dev'; // 'dev' or 'test'

const dev = {
  // eslint-disable-next-line radix
  port: parseInt(process.env.DEV_APP_PORT),
};
const prod = {
  // eslint-disable-next-line radix
  port: parseInt(process.env.PORT),
};

const config = {
  dev,
  prod,
};

module.exports = config[env];
