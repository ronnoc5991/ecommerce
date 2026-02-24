import z from "zod";
import { ProductWithVariantsSchema } from "./product.js";

export const CategorySlugSchema = z
  .string()
  .min(1)
  .max(30)
  .regex(/^[a-z-]+$/);

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: CategorySlugSchema,
});

export const CategoryWithProductsSchema = CategorySchema.extend({
  products: z.array(ProductWithVariantsSchema),
});
