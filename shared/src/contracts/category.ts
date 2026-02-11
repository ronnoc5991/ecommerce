import z from "zod";
import { CategorySchema, CreateCategorySchema } from "../schemas/index.js";
import { createContract } from "../utils/create-contract.js";

export const Create = createContract({
  httpMethod: "POST",
  getClientPath: () => "/categories",
  body: CreateCategorySchema,
  response: CategorySchema,
});

export const GetAll = createContract({
  httpMethod: "GET",
  getClientPath: () => "/categories",
  response: z.array(CategorySchema),
});

export default {
  create: Create,
  getAll: GetAll,
};
