import { Injectable } from '@nestjs/common';
import { prisma } from '../../../lib/prisma.js';
import { Audience, Product } from '../../../generated/prisma/client.js';

@Injectable()
export class ProductsService {
  async getAllProducts({
    audience,
  }: {
    audience?: Audience;
  }): Promise<Array<Product>> {
    return await prisma.product.findMany({
      where: {
        audience,
      },
      include: {
        variants: {
          include: {
            color: true,
          },
        },
        categories: true,
        defaultVariant: {
          include: {
            color: true,
          },
        },
      },
    });
  }

  async getProductById(id: number): Promise<Product | null> {
    return await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        variants: true,
      },
    });
  }
}
