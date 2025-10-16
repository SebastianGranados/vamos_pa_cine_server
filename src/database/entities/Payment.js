import { EntitySchema } from "typeorm";
import candy_shop from "./candy_shop.js";

export default new EntitySchema({
  name: "Payment",
  tableName: "payments",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    method: {
      type: "text",
    },
    status: {
      type: "boolean",
    },
    date: {
      type: "timestamp",
      createDate: true,
    },
    sale: {
      type: "decimal",
      precision: 10,
      scale: 2,
      nullable: true,
    },
  },
  relations: {
    candy_shop: {
      type: "many-to-one",
      target: candy_shop,
      joinColumn: { name: "candy_shop_id" },
      eager: true,
    },
  },
});
