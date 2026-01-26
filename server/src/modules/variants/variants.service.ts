import { Injectable } from '@nestjs/common';
import { Product, Variant } from '../../../generated/prisma/client.js';
import { prisma } from '../../../lib/prisma.js';

export type VariantSummary = {
  variant: Variant;
  product: Product;
  variants: Array<Variant>;
};

@Injectable()
export class VariantsService {
  // TODO: transform this result into a more convenient shape:
  async getVariantBySku(sku: string): Promise<VariantSummary | null> {
    const data = await prisma.variant.findUnique({
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

    if (!data) return null;

    const {
      sku: variantSku,
      color,
      id,
      price,
      productId,
      size,
      stock,
      product,
    } = data;

    return {
      variant: {
        id, // does a client need this?
        sku: variantSku,
        size,
        color,
        price,
        stock,
        productId,
      },
      product: {
        id: product.id,
        name: product.name,
        audience: product.audience,
        description: product.description,
      },
      variants: product.variants,
    };
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
