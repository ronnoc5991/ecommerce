import z from "zod";
import { ProductSchema } from "../../schemas/index.js";

export type ProductDTO = z.infer<typeof ProductSchema>;
