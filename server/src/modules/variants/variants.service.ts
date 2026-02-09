import { Injectable } from '@nestjs/common';
import { Variant } from '../../../generated/prisma/client.js';
import { prisma } from '../../../lib/prisma.js';

@Injectable()
export class VariantsService {
  // TODO: transform this result into a more convenient shape
  // TODO: ensure product is getting through to client
  async getVariantBySku(sku: string): Promise<Variant | null> {
    const data = await prisma.variant.findUnique({
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

  // async createVariant(createVariantDto: CreateVariantDTO): Promise<Variant> {
  //   const created = await prisma.variant.create({ data: createVariantDto });
  //   return created;
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
