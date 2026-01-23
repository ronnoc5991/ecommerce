import { z } from 'zod';

export const createCategorySchema = z
  .object({
    name: z.string(),
  })
  .required();

export type CreateCategoryDto = z.infer<typeof createCategorySchema>;
