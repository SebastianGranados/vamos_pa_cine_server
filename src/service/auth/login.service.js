import { findByEmail } from "../../repository/user/user.repository.js";
import { comparePassword } from "../../utils/password.util.js";
import { generateToken } from "../../utils/jwt.util.js";

export const loginService = async ({ email, password }) => {
  const user = await findByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }

  const validPassword = await comparePassword(password, user.password);
  if (!validPassword) throw new Error("Email or password incorrect");

  const token = generateToken({
    id: user.id,
    email: user.email,
    role_id: user.role_id,
  });

  const userResponse = {
    id: user.id,
    name: user.name,
    last_name: user.last_name,
    email: user.email,
  };

  return { token, user: userResponse };
};
