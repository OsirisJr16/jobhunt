import express from "express" ; 
import { login , profile } from "../controllers/userController";
import verifyToken from "../middlewares/authenticate";
const authRouter = express.Router() 

authRouter.post("/" , login) 
authRouter.get("/profile" , verifyToken , profile)
export default authRouter ; 