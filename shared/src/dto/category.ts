import z from "zod";
import { CategorySchema, CreateCategorySchema } from "../schemas/index.js";

export type CategoryDTO = z.infer<typeof CategorySchema>;

export type CreateCategoryDTO = z.infer<typeof CreateCategorySchema>;
