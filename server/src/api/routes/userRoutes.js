import express from 'express';
import userController from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.post("/login", userController.login);

export default userRoute;
