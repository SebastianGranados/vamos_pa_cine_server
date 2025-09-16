import { Router } from "express";
import { signup } from "../controller/auth/signup.controller.js";
import { login } from "../controller/auth/login.controller.js";
import { signupValidator } from "../validators/user.validator.js";
import { loginValidator } from "../validators/login.validator.js";
import { validateFields } from "../middleware/validateFields.middleware.js";

const router = Router();

router.post("/auth/signup", signupValidator, validateFields, signup);
router.post("/auth/login", loginValidator, validateFields, login);

export default router;
