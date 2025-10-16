import { EntitySchema } from "typeorm";
import products from "./product.js";

export default new EntitySchema({
  name: "CandyShop",
  tableName: "candy_shops",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    quantity: {
      type: "decimal",
      precision: 10,
      scale: 2,
    },
    total: {
      type: "decimal",
      precision: 10,
      scale: 2,
      nullable: true,
    },
  },
  relations: {
    products: {
      type: "many-to-one",
      target: products,
      joinColumn: { name: "product_id" },
      eager: true,
    },
  },
});
