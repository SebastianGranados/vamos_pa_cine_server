import { Router } from "express";
import { signup } from "../controller/signup.controller.js";
import { login } from "../controller/login.controller.js";
import { signupValidator } from "../validators/signup.validator.js";
import { loginValidator } from "../validators/login.validator.js";
import { validateFields } from "../middleware/validator.js";

const router = Router();

router.post("/signup", signupValidator, validateFields, signup);
router.post("/login", loginValidator, validateFields, login);

export default router;
