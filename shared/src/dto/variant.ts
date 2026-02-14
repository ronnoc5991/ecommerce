import z from "zod";
import { CreateVariantSchema, VariantSchema } from "../schemas/index.js";

export type VariantDTO = z.infer<typeof VariantSchema>;

export type CreateVariantDTO = z.infer<typeof CreateVariantSchema>;
