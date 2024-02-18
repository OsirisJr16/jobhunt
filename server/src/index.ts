import { createConnection } from "typeorm";
import config from "./config/database";
import { Express } from "express";




createConnection(config)
    .then(() => {
        console.log('Database connection successful!');
    })
    .catch(error => console.log('Connection Error: ', error));