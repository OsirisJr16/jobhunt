import { Request, Response } from "express";
import { getRepository, getConnectionManager } from "typeorm";
import { User } from "../entity/user.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { myDataSource } from "../configs/app-data-source";

require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY ; 

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }
    try {
        const userRepository = myDataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password." });
        }
       
        if(password != user.password){
            return res.status(401).json({ message: "Invalid email or password." });
        }
        const token = jwt.sign({ userId: user.id, email: user.email }, String(SECRET_KEY), { expiresIn: "1h" });

        res.status(200).json({ message:`Welcome ${user.username}` , token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

export const profile = async (req: Request, res: Response)=> {
    const userId = req.userId ; 
    try {
        const userRepository = myDataSource.getRepository(User) ; 
        const user = await userRepository.findOne({ where: { id: Number(userId) } }); 
        if(!user){
            res.status(404).json({success : false , message:'User not Found'})
        }
        res.json({success:true , user})
    }catch(error) {
        console.error("Profile Error : " , error)
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}