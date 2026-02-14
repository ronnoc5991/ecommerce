import z from "zod";
import {
  CreateProductSchema,
  ProductSchema,
  ProductWithVariantsSchema,
} from "../schemas/index.js";

export type ProductDTO = z.infer<typeof ProductSchema>;

export type CreateProductDTO = z.infer<typeof CreateProductSchema>;

export type ProductWithVariantsDTO = z.infer<typeof ProductWithVariantsSchema>;
