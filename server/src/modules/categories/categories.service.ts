import { Injectable } from '@nestjs/common';
import { Audience, Category } from '../../../generated/prisma/client.js';
import { prisma } from '../../../lib/prisma.js';

@Injectable()
export class CategoriesService {
  async getAllCategories(): Promise<Array<Category>> {
    return await prisma.category.findMany();
  }

  async getProductsInCategory(category: string, audience?: Audience) {
    const result = await prisma.product.findMany({
      where: {
        categories: {
          some: {
            slug: category,
          },
        },
        ...(audience && {
          audience,
        }),
      },
      include: {
        defaultVariant: {
          include: {
            color: true,
          },
        },
        variants: {
          include: {
            color: true,
          },
        },
      },
    });
    return result;
  }
}
