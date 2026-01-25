import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { CategoriesService } from './categories.service.js';
import { Category } from '../../generated/prisma/client.js';
import { ZodValidationPipe } from '../pipes/zod-validation-pipe.js';
import {
  type CreateCategoryDto,
  createCategorySchema,
} from './categories.schema.js';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAll(): Promise<Array<Category>> {
    return this.categoriesService.getAllCategories();
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createCategorySchema))
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.createCategory(createCategoryDto);
  }
}
