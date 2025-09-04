import { Router } from "express";
import { signup } from "../controller/signup.controller.js";
import { login } from "../controller/login.controller.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
