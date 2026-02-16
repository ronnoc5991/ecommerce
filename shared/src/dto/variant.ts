import z from "zod";
import { ProductVariantSchema } from "../schemas/index.js";

export type ProductVariantDTO = z.infer<typeof ProductVariantSchema>;
