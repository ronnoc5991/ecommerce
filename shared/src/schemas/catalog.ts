import z from "zod";
import { AudienceSchema } from "./audience.js";
import { CategorySchema } from "./category.js";
import { ProductWithVariantsSchema } from "./product.js";

export const CatalogSchema = z.object({
  audience: AudienceSchema,
  categories: z.array(
    CategorySchema.extend({
      products: z.array(ProductWithVariantsSchema),
    }),
  ),
});
