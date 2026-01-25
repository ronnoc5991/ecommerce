import { Injectable } from '@nestjs/common';
import { Category } from '../../generated/prisma/client.js';
import { prisma } from '../../lib/prisma.js';
import { CreateCategoryDto } from './categories.schema.js';

@Injectable()
export class CategoriesService {
  async getAllCategories(): Promise<Array<Category>> {
    return await prisma.category.findMany();
  }

  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return await prisma.category.create({
      data: createCategoryDto,
    });
  }
}
