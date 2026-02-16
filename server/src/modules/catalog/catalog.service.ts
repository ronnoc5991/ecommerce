import { Injectable } from '@nestjs/common';
import { Audience } from '../../../generated/prisma/enums.js';
import { prisma } from '../../../lib/prisma.js';

@Injectable()
export class CatalogService {
  async getByAudience(audience: Audience) {
    const result = await prisma.category.findMany({
      where: {
        products: {
          some: {
            audience,
          },
        },
      },
      include: {
        products: {
          where: {
            audience,
          },
          include: {
            variants: {
              include: {
                color: true,
              },
            },
            defaultVariant: {
              include: {
                color: true,
              },
            },
          },
        },
      },
    });
    return result;
  }
}
