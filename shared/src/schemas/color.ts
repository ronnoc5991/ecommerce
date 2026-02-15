import z from "zod";

export const BaseColorSchema = z.object({
  name: z.string(),
  slug: z.string(),
  hex: z.string().length(7),
});

export const ColorSchema = BaseColorSchema.extend({
  id: z.number(),
});

export const CreateColorSchema = BaseColorSchema.required();
