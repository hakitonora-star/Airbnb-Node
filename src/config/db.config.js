// import { dbconfig } from ".";

// const config={
//   development: {
//     username: dbconfig.DB_USER,
//     password: dbconfig.DB_PASSWORD,
//     database: dbconfig.DB_NAME,
//     host: dbconfig.DB_HOST,
//     dialect: "mysql",
//   }
// }
// export default config;

// import dotenv from 'dotenv';
// dotenv.config();

// module.exports = {
//     development: {
//         username: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         host: process.env.DB_HOST,
//         dialect: 'mysql'
//     }
// };
// require('dotenv').config();

// module.exports = {
//   development: {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     dialect: 'mysql'
//   }
// };

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
