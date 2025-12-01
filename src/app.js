import express from "express";
import connection from './connection/Connection.js';
import logger          from "./middlewares/logger.js";

const app = express();
app.use(logger);
await connection.sync({ alter: false});

export default app;