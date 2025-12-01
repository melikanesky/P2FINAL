import { Sequelize } from 'sequelize';
import {DB_MESSAGES} from '../constants/messages/db.js';
import { DB_CONFIG } from '../constants/config/db.js';

const connection = new Sequelize(
    DB_CONFIG.name,
    DB_CONFIG.user,
    DB_CONFIG.password,
    {
        host: DB_CONFIG.host,
        dialect: DB_CONFIG.dialect,
        port: DB_CONFIG.port
    }
);

try {
    await connection.authenticate();
    console.log(DB_MESSAGES.CONNECTION_SUCCESS);
} catch (error) {
    console.error(DB_MESSAGES.CONNECTION_ERROR, error);
}

export default connection;