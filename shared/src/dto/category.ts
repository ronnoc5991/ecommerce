import z from "zod";
import { CategorySchema } from "../schemas/index.js";

export type CategoryDTO = z.infer<typeof CategorySchema>;
