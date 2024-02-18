import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY as string;
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ success: false, message: "No token found" });
    }
    jwt.verify(token, SECRET_KEY, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Invalid token" });
        }
        req.userId = decoded.userId;
        next();
    });
};

export default verifyToken;
