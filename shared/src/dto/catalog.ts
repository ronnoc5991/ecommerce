import z from "zod";
import { CatalogSchema } from "../schemas/index.js";

export type CatalogDTO = z.infer<typeof CatalogSchema>;
