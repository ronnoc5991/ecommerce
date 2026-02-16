import z from "zod";
import { CategorySchema } from "../schemas/index.js";
import { createContract } from "../utils/create-contract.js";

export const GetAll = createContract({
  httpMethod: "GET",
  getClientPath: () => "/categories",
  response: z.array(CategorySchema),
});

export default {
  getAll: GetAll,
};
