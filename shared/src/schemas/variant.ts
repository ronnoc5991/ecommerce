import z from "zod";
import { ColorSchema } from "./color.js";

export const ProductVariantSchema = z.object({
  id: z.number(),
  stock: z.int(),
  sku: z.string(),
  size: z.string(),
  color: ColorSchema,
  priceCents: z.int(),
});
