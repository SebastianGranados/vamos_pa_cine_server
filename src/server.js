import app from "./app/index.js";

import config from "./config/server.config.js";
import { AppDataSource } from "./database/database.js";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});