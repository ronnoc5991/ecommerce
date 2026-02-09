import z from "zod";

export const BaseVariantSchema = z.object({
  sku: z.string(),
  price: z.int(),
  stock: z.int(),
  size: z.string(),
  color: z.string(),
});

export const VariantSchema = BaseVariantSchema.extend({
  id: z.number(),
});
