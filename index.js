import express from "express";
import mongoose from "mongoose";
import { authRouter } from "./router/authRouter.js";
import { eventRouter } from "./router/eventRouter.js";
import { userRouter } from "./router/userRouter.js";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = 5000 || process.env.PORT;
app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/event", eventRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Illia:${process.env.MONGODB_PASS}@cluster0.e9pzvlo.mongodb.net/?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log("server started "));
  } catch (error) {
    console.log(error);
  }
};
start();
