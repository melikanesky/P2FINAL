export const DB_CONFIG = {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
};