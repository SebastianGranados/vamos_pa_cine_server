import { DataSource } from "typeorm";

import config from "../config/database.config.js";
import User from "./entities/User.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: config.DATABASE_URL,
  synchronize: true,
  entities: [User],
});
