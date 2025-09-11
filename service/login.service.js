import { userRepository } from "../repository/user.repository.js";
import { comparePassword } from "../utils/password.util.js";
import { generateToken } from "../utils/jwt.util.js";

export const loginService = async ({ email, password }) => {
  const user = await userRepository.findOne({ where: { email } });
  if (!user) {
    throw new Error("User not found");
  }

  const validPassword = await comparePassword(password, user.password);
  if (!validPassword) throw new Error("Email or password incorrect");

  const token = generateToken({ id: user.id, email: user.email, role_id: user.role_id });
  return { token, user };
};
