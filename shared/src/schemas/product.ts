import z from "zod";
import { AudienceSchema } from "./audience.js";
import { CategorySchema } from "./category.js";
import { VariantSchema } from "./variant.js";

export const BaseProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  audience: AudienceSchema,
});

export const ProductSchema = BaseProductSchema.extend({
  id: z.number(),
});

export const CreateProductSchema = BaseProductSchema.required();

export const ProductWithVariantsSchema = ProductSchema.extend({
  categories: z.array(CategorySchema),
  variants: z.array(VariantSchema),
});
