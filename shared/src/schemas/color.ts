import z from "zod";

export const ColorSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  hex: z.string().length(7),
});
