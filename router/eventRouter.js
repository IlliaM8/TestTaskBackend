import Router from "express";
import eventController from "../controller/eventController.js";
import { authMiddleware } from "../utils/authMIddleware.js";

const eventRouter = new Router();

eventRouter.post("/:id", authMiddleware, eventController.create);
eventRouter.get("/:id", authMiddleware, eventController.getAll);

export { eventRouter };
