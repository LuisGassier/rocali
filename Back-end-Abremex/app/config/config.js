const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve('./enviroment', 'development' + '.env')
});


module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_HOST: process.env.DATABASE_HOST || 'mongodb://localhost:27017/abremex',
  PORT: process.env.PORT || 3000,
  SECRET: 'ABREMEXXEMERBA20211202'
};