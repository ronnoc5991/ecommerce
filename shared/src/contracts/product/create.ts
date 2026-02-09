import { createContract } from "../create-contract.js";
import { ProductSchema } from "../../schemas/product/product.schema.js";
import { CreateProductSchema } from "../../schemas/index.js";

export const CreateProduct = createContract({
  httpMethod: "POST",
  getClientPath: () => "/products/",
  body: CreateProductSchema,
  response: ProductSchema,
});
