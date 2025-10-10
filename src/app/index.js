import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import userRouter from "../routes/user.routes.js";
import productRouter from "../routes/products.router.js";

dotenv.config();
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/auth", userRouter);
app.use("/products", productRouter);

export default app;
