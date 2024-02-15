import express from 'express';
import { createConnection } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

createConnection()
.then(connection => {
  console.log('Connected to the database');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
})
.catch(error => {
  console.error('Error connecting to the database', error);
});
