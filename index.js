import express from "express";
import mongoose from "mongoose";
import { authRouter } from "./router/authRouter.js";
import { eventRouter } from "./router/eventRouter.js";
import { userRouter } from "./router/userRouter.js";
import cors from "cors";
const app = express();

const PORT = 5000;
app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/event", eventRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Illia:Illia1235x@cluster0.e9pzvlo.mongodb.net/?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log("server started "));
  } catch (error) {
    console.log(error);
  }
};
start();
