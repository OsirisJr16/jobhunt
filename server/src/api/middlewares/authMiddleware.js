import { JWT_SECRET_KEY } from "../../config/confing.cjs";
const jwt = require("jsonwebtoken");
function verifyToken(req , res , next) {
    const token = req.headers['authorization']

    if (!token) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }
    jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Invalid token" });
        }
        req.userId = decoded.userId;
        next();
    });
}

module.exports  = {verifyToken}