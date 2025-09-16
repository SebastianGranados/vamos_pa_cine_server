import { AppDataSource } from "../../database/database.js";
import User from "../../database/entities/User.js";

export const userRepository = AppDataSource.getRepository(User);

export const findByEmail = (email) => {
  return userRepository.findOne({ where: { email } });
};
