import bcrypt from "bcrypt";
import { userRepository } from "../repository/user.repository.js";

export const signup = async (req, res) => {
  try {
    const { name, last_name, email, password } = req.body;

    if (!name || !last_name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "The email is already registered" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
      name,
      last_name,
      email,
      password: hashPassword,
    });

    await userRepository.save(newUser);

    return res.status(201).json({ message: "User created" });
  } catch (error) {
    return res.status(500).json({ message: "Error registering user", error });
  }
};
