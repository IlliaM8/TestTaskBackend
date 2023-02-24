import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
const secretKey = process.env.SECRET__KEY;

export const generateAccessToken = (id) => {
  return jwt.sign({ id }, secretKey, { expiresIn: "24h" });
};
