import z from "zod";
import { Audience } from "../../types/index.js";

export const BaseProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  audience: z.enum(Audience),
});

export const ProductSchema = BaseProductSchema.extend({
  id: z.number(),
});
