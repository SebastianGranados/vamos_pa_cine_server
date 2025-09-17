import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import userRouter from "../routes/user.routes.js";

dotenv.config();
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", userRouter);

export default app;
