import { Injectable } from '@nestjs/common';
import { ProductVariant } from '../../../generated/prisma/client.js';
import { prisma } from '../../../lib/prisma.js';

@Injectable()
export class VariantsService {
  // TODO: transform this result into a more convenient shape
  // TODO: ensure product is getting through to client
  async getVariantBySku(sku: string): Promise<ProductVariant | null> {
    const data = await prisma.productVariant.findUnique({
      where: {
        sku,
      },
      // TODO: include product and variants
      // include: {
      //   product: {
      //     include: {
      //       variants: true,
      //     },
      //   },
      // },
    });

    if (!data) return null;

    return data;
  }
}
