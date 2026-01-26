import { Audience } from '../../../generated/prisma/enums.js';
import { z } from 'zod';

export const createProductSchema = z
  .object({
    name: z.string(),
    description: z.string(),
    audience: z.enum(Audience),
  })
  .required();

export type CreateProductDto = z.infer<typeof createProductSchema>;
