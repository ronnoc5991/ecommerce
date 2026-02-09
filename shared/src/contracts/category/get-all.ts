import z from "zod";
import { CategorySchema } from "../../schemas/index.js";
import { createContract } from "../create-contract.js";

export const GetAllCategories = createContract({
  httpMethod: "GET",
  getClientPath: () => "/categories",
  response: z.array(CategorySchema),
});
