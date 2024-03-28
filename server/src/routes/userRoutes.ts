import express from "express";
import { login, profile, registerCompany,registerStudent } from "../controllers/userController";
import verifyToken from "../middlewares/authenticate";
const authRouter = express.Router();

authRouter.post("/", login);
authRouter.post("/registerCompany", registerCompany);
authRouter.get("/profile", verifyToken, profile);
authRouter.post("/registerStudent", registerStudent) ; 

export default authRouter;
