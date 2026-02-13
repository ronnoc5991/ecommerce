import z from "zod";
import { CreateProductSchema } from "../../schemas/index.js";

export type CreateProductDTO = z.infer<typeof CreateProductSchema>;
