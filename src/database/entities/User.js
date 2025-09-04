import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    name: {
      type: "text",
    },
    last_name: {
      type: "text",
    },
    password: {
      type: "text",
    },
    email: {
      type: "text",
      unique: true,
    },
    status: {
      type: "boolean",
      default: true,
    },
    created_at: {
      type: "timestamp",
      createDate: true,
    },
    updated_at: {
      type: "timestamp",
      updateDate: true,
    },
    deleted_at: {
      type: "timestamp",
      nullable: true,
    },
  },
});