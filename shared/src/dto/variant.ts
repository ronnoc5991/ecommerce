import z from "zod";
import {
  CreateProductVariantSchema,
  ProductVariantSchema,
} from "../schemas/index.js";

export type ProductVariantDTO = z.infer<typeof ProductVariantSchema>;

export type CreateProductVariantDTO = z.infer<
  typeof CreateProductVariantSchema
>;
