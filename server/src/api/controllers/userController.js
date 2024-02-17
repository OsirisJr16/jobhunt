import brcypt from "brcypt";
import { JWT_SECRET_KEY } from "../../config/confing.cjs";
import { createConnection } from "typeorm";
import { User } from "../../models/user.model";
const jwt = require('jsonwebtoken') ; 


const userController = {
    login : async(req , res) => {
        const{email , password} = req.body ; 
        try {

        }catch(error){
            console.error("Login Failed : " , error) ; 
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }

}