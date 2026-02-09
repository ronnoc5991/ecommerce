import z from "zod";

export const BaseCategorySchema = z.object({
  name: z.string(),
});

export const CategorySchema = BaseCategorySchema.extend({
  id: z.number(),
});
