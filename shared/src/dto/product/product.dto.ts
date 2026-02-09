import z from "zod";
import { ProductSchema } from "../../schemas/product/product.schema.js";

export type ProductDTO = z.infer<typeof ProductSchema>;
