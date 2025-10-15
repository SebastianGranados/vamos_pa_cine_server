import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Product",
  tableName: "products",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    name: {
      type: "varchar",
      length: 255,
    },
    value: {
      type: "decimal",
      precision: 10,
      scale: 2,
    },
    sale: {
      type: "decimal",
      precision: 10,
      scale: 2,
      nullable: true,
    },
    status: {
      type: "boolean",
      default: false,
    },
  },
});
