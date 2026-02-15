import { CreateProductDTO } from 'shared';
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

  async createProduct(createProductDto: CreateProductDTO): Promise<Product> {
    const product = await prisma.product.create({
      data: createProductDto,
    });
    return product;
  }

  async updateProduct(
    id: number,
    createProductDto: CreateProductDTO,
  ): Promise<Product> {
    const product = await prisma.product.update({
      data: createProductDto,
      where: {
        id,
      },
    });

    return product;
  }

  async deleteProduct(id: number): Promise<Product> {
    const deletedProduct = await prisma.product.delete({
      where: {
        id,
      },
    });
    return deletedProduct;
  }
}
