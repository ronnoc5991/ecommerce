import z from "zod";
import { ColorSchema } from "../schemas/index.js";

export type ColorDTO = z.infer<typeof ColorSchema>;
