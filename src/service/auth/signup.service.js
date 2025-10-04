import { hashPassword } from "../../utils/password.util.js";
import {
  userRepository,
  findByEmail,
} from "../../repository/user/user.repository.js";
import jwt from "jsonwebtoken";

export const signupService = async ({ name, last_name, email, password }) => {
  const existingUser = await findByEmail(email);

  if (existingUser) {
    throw new Error("The email is already registered");
  }

  const hashedPassword = await hashPassword(password);

  const newUser = userRepository.create({
    name,
    last_name,
    email,
    password: hashedPassword,
  });

  const savedUser = await userRepository.save(newUser);

  const tokenVerifyEmail = jwt.sign(
    { email: savedUser.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );

  const { password: userPassword, ...userWithoutPassword } = savedUser;

  return {
    id: userWithoutPassword.id,
    name: userWithoutPassword.name,
    last_name: userWithoutPassword.last_name,
    email: userWithoutPassword.email,
    status: userWithoutPassword.status,
    tokenVerifyEmail,
  };
};
