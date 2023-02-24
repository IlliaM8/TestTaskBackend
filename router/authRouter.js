import Router from "express";
import AuthController from "../controller/authController.js";
import { signUpValidator } from "../utils/validators.js";
const authRouter = new Router();

authRouter.post("/signIn", AuthController.registration);
authRouter.post("/login", AuthController.login);

export { authRouter };
