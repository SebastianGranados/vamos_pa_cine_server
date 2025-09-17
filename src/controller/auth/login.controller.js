import { loginService } from "../../service/auth/login.service.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await loginService({ email, password });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: user,
    });
  } catch (error) {
    if (
      error.message === "User not found" ||
      error.message === "Email or password incorrect"
    ) {
      return res.status(401).json({ message: error.message });
    }
    return res.status(500).json({ message: "Error logging in" });
  }
};
