import brcypt from "brcypt";
import { JWT_SECRET_KEY } from "../../config/confing.cjs";
import { createConnection } from "typeorm";
import { User } from "../../models/user.model";
const jwt = require('jsonwebtoken') ; 


const userController = {
    login : async(req , res) => {
        const{email , password} = req.body ; 
        try {
            const userRepository = (await createConnection()).getRepository(User)
            const user = await userRepository.findOne({email}) 

            if (!user){
                return res.status(401).json({ success: false, message: "email or password invalid"})
            }

            const isPasswordValid = await brcypt.compare(password , user.password) ; 
            if (!isPasswordValid){
                return res.status(401).json({ success: false, message: "email or password invalid"})
            }

            const token = jwt.sign({userId : user.id} , JWT_SECRET_KEY, {expiresIn : '1h'})
            res.json({success : true , token})

        }catch(error){
            console.error("Login Failed : " , error) ; 
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }

}

module.exports = userController ; 