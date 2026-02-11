import z from "zod";
import { VariantSchema } from "../schemas/index.js";
import { createContract } from "../utils/create-contract.js";

export const GetOne = createContract({
  httpMethod: "GET",
  getClientPath: ({ sku }: { sku: string }) => `/variants/${sku}`,
  response: z.array(VariantSchema),
});

export default {
  getOne: GetOne,
};
