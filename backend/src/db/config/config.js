<<<<<<< HEAD
// module.exports = {
//     development: {
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         host: process.env.DB_HOSTNAME,
//         dialect: 'postgres',
//     },
//     test: {
//         username: 'root',
//         password: null,
//         database: 'database_test',
//         host: '127.0.0.1',
//         dialect: 'mysql',
//     },
//     production: {
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         host: process.env.DB_HOSTNAME,
//         dialect: 'postgres',
//     },
// }

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      //   ssl: true,
      // native: true,
      ssl: {
        require: true,
        rejectUnauthorized: false, // Important for Render PostgreSQL
      },
    },
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: "postgres",
=======
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
>>>>>>> development
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
<<<<<<< HEAD
    protocol: "postgres",
    dialectOptions: {
      // ssl: true,
      // native: true,
      ssl: {
        require: true,
        rejectUnauthorized: false, // Important for Render PostgreSQL
=======
    dialectOptions: {
      ssl: {
        require: "true",
        native: "true",
>>>>>>> development
      },
    },
  },
};
