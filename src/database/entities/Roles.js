import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Role",
  tableName: "roles",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    name: {
      type: "text",
      unique: true,
    },
  },
});
