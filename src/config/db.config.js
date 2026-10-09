require('ts-node/register');

const { dbConfig } = require('./index.ts');
require('dotenv').config();

const config = {
    development: {
        username: dbConfig.DB_USER,
        password: dbConfig.DB_PASSWORD,
        database: dbConfig.DB_NAME,
        host: dbConfig.DB_HOST,
        dialect: 'mysql'
    }
};

module.exports = config;