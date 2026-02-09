import { CategorySchema, CreateCategorySchema } from "../../schemas/index.js";
import { createContract } from "../create-contract.js";

export const CreateCategory = createContract({
  httpMethod: "POST",
  getClientPath: () => "/categories",
  body: CreateCategorySchema,
  response: CategorySchema,
});
