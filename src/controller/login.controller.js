import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userRepository } from "../repository/user.repository.js";

const JWT_SECRET = process.env.JWT_SECRET || "un_secret_dev";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userRepository.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).json({ message: "Email or password incorrect" });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Error logging in", error });
  }
};
