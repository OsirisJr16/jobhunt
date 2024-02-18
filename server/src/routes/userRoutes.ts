import express from "express" ; 
import { login } from "../controllers/userController";

const authRouter = express.Router() 

authRouter.post("/" , login) 

export default authRouter ; 