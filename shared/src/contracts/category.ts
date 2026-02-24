import z from "zod";
import { CategorySchema, ProductWithVariantsSchema } from "../schemas/index.js";
import { createContract } from "../utils/create-contract.js";
import { Audience } from "../types/index.js";

export const GetAll = createContract({
  httpMethod: "GET",
  getClientPath: () => "/categories",
  response: z.array(CategorySchema),
});

export const GetOne = createContract({
  httpMethod: "GET",
  getClientPath: ({ slug, audience }: { slug: string; audience?: Audience }) =>
    `/categories/${slug}${audience ? `?audience=${audience}` : ""}`,
  response: z.object({
    products: z.array(ProductWithVariantsSchema),
  }),
});

export default {
  getAll: GetAll,
  getOne: GetOne,
};
