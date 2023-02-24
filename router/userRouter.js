import Router from "express";
import UserController from "../controller/userController.js";
import { authMiddleware } from "../utils/authMIddleware.js";

const userRouter = new Router();

userRouter.get("/:page/:limit", authMiddleware, UserController.getAll);
userRouter.post("/", authMiddleware, UserController.create);

export { userRouter };
