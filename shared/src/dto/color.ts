import z from "zod";
import { ColorSchema, CreateColorSchema } from "../schemas/index.js";

export type ColorDTO = z.infer<typeof ColorSchema>;

export type CreateColorDTO = z.infer<typeof CreateColorSchema>;
