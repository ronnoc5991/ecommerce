import { ProductSchema } from "../../schemas/index.js";
import { createContract } from "../create-contract.js";

export const DeleteProduct = createContract({
  httpMethod: "DELETE",
  getClientPath: ({ productId }) => `/products/${productId}`,
  response: ProductSchema,
});
