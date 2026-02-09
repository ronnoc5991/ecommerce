import z from "zod";
import { createContract } from "../create-contract.js";
import { ProductSchema } from "../../schemas/product/product.schema.js";

export const GetAllProducts = createContract({
  httpMethod: "GET",
  getClientPath: () => "/products",
  response: z.array(ProductSchema),
});
