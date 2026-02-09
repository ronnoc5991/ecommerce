import z from "zod";
import { CreateVariantSchema } from "../../schemas/index.js";

export type CreateVariantDTO = z.infer<typeof CreateVariantSchema>;
