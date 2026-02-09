import z from "zod";
import { createContract } from "../create-contract.js";
import { VariantSchema } from "../../schemas/index.js";

export const GetVariant = createContract({
  httpMethod: "GET",
  getClientPath: ({ sku }: { sku: string }) => `/variants/${sku}`,
  response: z.array(VariantSchema),
});
