import z from "zod";
import { AudienceSchema } from "./audience.js";
import { CategorySchema } from "./category.js";
import { ProductVariantSchema } from "./variant.js";

export const ProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  audience: AudienceSchema,
  id: z.number(),
});

export const ProductWithVariantsSchema = ProductSchema.extend({
  categories: z.array(CategorySchema),
  variants: z.array(ProductVariantSchema),
  defaultVariant: ProductVariantSchema,
});
