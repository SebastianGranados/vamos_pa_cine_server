import { hashPassword } from "../utils/password.util.js";
import { userRepository } from "../repository/user.repository.js";

export const signupService = async ({ name, last_name, email, password }) => {
  
  const existingUser = await userRepository.findOne({ where: { email } });
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

  await userRepository.save(newUser);
  return newUser;
};
