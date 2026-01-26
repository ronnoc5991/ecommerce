import { Injectable } from '@nestjs/common';
import { Product, Variant } from '../../../generated/prisma/client.js';
import { prisma } from '../../../lib/prisma.js';

type DesiredShape = {
  variant: Variant;
  product: Product;
  variants: Array<Variant>;
};

@Injectable()
export class VariantsService {
  // TODO: transform this result into a more convenient shape:
  async getVariantBySku(sku: string): Promise<Variant | null> {
    return await prisma.variant.findUnique({
      where: {
        sku,
      },
      include: {
        product: {
          include: {
            variants: true,
          },
        },
      },
    });
  }

  // async createVariant(createVariantDto: CreateVariantDto): Promise<Variant> {
  //   TODO
  // }

  // async updateVariant(
  //   id: number,
  //   createVariantDto: CreateVariantDto,
  // ): Promise<Variant> {
  //   const variant = await prisma.variant.update({
  //     data: createVariantDto,
  //     where: {
  //       id,
  //     },
  //   });

  //   return variant;
  // }

  // async deleteVariant(id: number): Promise<Variant> {
  //   const deletedVariant = await prisma.variant.delete({
  //     where: {
  //       id,
  //     },
  //   });
  //   return deletedVariant;
  // }
}
