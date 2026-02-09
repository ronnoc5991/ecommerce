import z from "zod";
import { CreateCategorySchema } from "../../schemas/index.js";

export type CreateCategoryDTO = z.infer<typeof CreateCategorySchema>;
