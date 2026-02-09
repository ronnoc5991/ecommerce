import z from "zod";
import { VariantSchema } from "../../schemas/index.js";

export type VariantDTO = z.infer<typeof VariantSchema>;
