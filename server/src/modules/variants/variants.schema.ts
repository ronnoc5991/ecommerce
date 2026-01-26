import { z } from 'zod';

export const createVariantSchema = z.object({}).required();

export type CreateVariantDto = z.infer<typeof createVariantSchema>;
