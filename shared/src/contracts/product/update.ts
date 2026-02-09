import { ProductSchema } from "../../schemas/index.js";
import { createContract } from "../create-contract.js";

export const UpdateProduct = createContract({
  httpMethod: "PUT",
  getClientPath: ({ productId }) => `/products/${productId}`,
  body: ProductSchema,
  response: ProductSchema,
});
