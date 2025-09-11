import { signupService } from "../service/signup.service.js";

export const signup = async (req, res) => {
  try {
    const { name, last_name, email, password } = req.body;

    const newUser = await signupService({ name, last_name, email, password });

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    if (error.message === "The email is already registered") {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: "Error registering user" });
  }
};
