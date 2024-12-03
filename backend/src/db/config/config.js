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
        url: 'postgresql://passthesalt_postgres_db_user:jD9LfSFnYYOpOboUgDSv9re7TThES38e@dpg-ct7ecb5ds78s73d537p0-a.singapore-postgres.render.com/passthesalt_postgres_db',
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: true,
            native: true,
        },
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: 'postgres',
    },
    production: {
        url: 'postgresql://passthesalt_postgres_db_user:jD9LfSFnYYOpOboUgDSv9re7TThES38e@dpg-ct7ecb5ds78s73d537p0-a.singapore-postgres.render.com/passthesalt_postgres_db',
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: true,
            native: true,
        },
    },
}
