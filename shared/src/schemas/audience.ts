import z from "zod";
import { Audience } from "../types/index.js";

export const AudienceSchema = z.enum(Audience);
