import { signupService } from "../../service/auth/signup.service.js";
import { sendVerificationEmail } from "../../email/email.service.js";
import { verifyEmailService } from "../../service/auth/verify.service.js";

export const signup = async (req, res) => {
  try {
    const { name, last_name, email, password } = req.body;

    const newUser = await signupService({ name, last_name, email, password });

    await sendVerificationEmail(newUser.email, newUser.tokenVerifyEmail);

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    if (error.message === "The email is already registered") {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const verifyEmailController = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({ message: "Verification token is missing" });
    }

    await verifyEmailService(token);

    return res.status(200).json({ message: "Account verified successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Error verifying account" });
  }
};
