import z from "zod";
import { CreateProductSchema } from "../schemas/product/create-product.schema.js";

export type CreateProductDTO = z.infer<typeof CreateProductSchema>;
