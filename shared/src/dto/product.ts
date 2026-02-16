import z from "zod";
import { ProductSchema, ProductWithVariantsSchema } from "../schemas/index.js";

export type ProductDTO = z.infer<typeof ProductSchema>;

export type ProductWithVariantsDTO = z.infer<typeof ProductWithVariantsSchema>;
