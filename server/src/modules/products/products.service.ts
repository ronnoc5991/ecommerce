import { Injectable } from '@nestjs/common';
import { Product } from '../../../generated/prisma/client.js';
import { prisma } from '../../../lib/prisma.js';
import { CreateProductDto } from './products.schema.js';

@Injectable()
export class ProductsService {
  async getAllProducts(): Promise<Array<Product>> {
    return await prisma.product.findMany();
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

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = await prisma.product.create({
      data: createProductDto,
    });
    return product;
  }

  async updateProduct(
    id: number,
    createProductDto: CreateProductDto,
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
