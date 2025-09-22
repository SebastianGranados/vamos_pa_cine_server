import jwt from "jsonwebtoken";
import { userRepository } from "../../repository/user/user.repository.js";

export const verifyEmailService = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userRepository.findOneBy({ email: decoded.email });

    if (!user) {
      throw new Error("User not found");
    }

    if (user.status === true) {
      return { message: "User already verified" };
    }

    user.status = true;
    await userRepository.save(user);

    return { message: "User verified successfully." };
  } catch (error) {
    throw new Error("Invalid or expired verification token");
  }
};
