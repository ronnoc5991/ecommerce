import z from "zod";
import { ProductVariantSchema } from "./variant.js";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
});

export const ProductWithVariantsSchema = ProductSchema.extend({
  variants: z.array(ProductVariantSchema),
  defaultVariant: ProductVariantSchema,
});
