import z from "zod";
import { ProductVariantSchema } from "../schemas/index.js";
import { createContract } from "../utils/create-contract.js";

export const GetOne = createContract({
  httpMethod: "GET",
  getClientPath: ({ sku }: { sku: string }) => `/variants/${sku}`,
  response: z.array(ProductVariantSchema),
});

export default {
  getOne: GetOne,
};
