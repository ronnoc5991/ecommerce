import { ProductSchema } from "../../schemas/product/product.schema.js";
import { createContract } from "../create-contract.js";

export const GetProduct = createContract({
  httpMethod: "GET",
  getClientPath: ({ productId }: { productId: string }) =>
    `/products/${productId}`,
  response: ProductSchema,
});
