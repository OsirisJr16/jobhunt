import { ConnectionOptions } from "typeorm";

require('dotenv').config({ path: './src/.env' });

const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME,
    entities: [process.env.ENTITIES_PATH || './src/models/*.ts'],
    synchronize: process.env.SYNCHRONIZE === 'true',
};

export default config;
