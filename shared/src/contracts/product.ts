import z from "zod";
import { ProductSchema, ProductWithVariantsSchema } from "../schemas/index.js";
import { createContract } from "../utils/create-contract.js";
import { Audience } from "../types/index.js";

const GetAll = createContract({
  httpMethod: "GET",
  getClientPath: ({ audience }: { audience: Audience }) =>
    `/products?audience=${audience}`,
  response: z.array(ProductWithVariantsSchema),
});

const GetOne = createContract({
  httpMethod: "GET",
  getClientPath: ({ productId }: { productId: string }) =>
    `/products/${productId}`,
  response: ProductSchema,
});

export default {
  getAll: GetAll,
  getOne: GetOne,
};
