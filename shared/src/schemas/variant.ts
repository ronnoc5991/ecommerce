import z from "zod";

export const BaseProductVariantSchema = z.object({
  sku: z.string(),
  price: z.int(),
  stock: z.int(),
  size: z.string(),
  color: z.string(),
});

export const CreateProductVariantSchema = BaseProductVariantSchema.required();

export const ProductVariantSchema = BaseProductVariantSchema.extend({
  id: z.number(),
});
