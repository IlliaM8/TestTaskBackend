import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(403).json("Not auth");
    }
    const decodeData = jwt.verify(token, process.env.SECRET__KEY);
    req.userId = decodeData.id;
    next();
  } catch (error) {
    return res.status(403).json("Not auth");
  }
};
