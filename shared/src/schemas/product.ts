import z from "zod";
import { AudienceSchema } from "./audience.js";

export const BaseProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  audience: AudienceSchema,
});

export const ProductSchema = BaseProductSchema.extend({
  id: z.number(),
});

export const CreateProductSchema = BaseProductSchema.required();
