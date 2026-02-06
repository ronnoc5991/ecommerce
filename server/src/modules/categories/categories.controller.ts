import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { type CreateCategoryDto, createCategorySchema } from 'shared';
import { CategoriesService } from './categories.service.js';
import { Category } from '../../../generated/prisma/client.js';
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe.js';
import { type CustomResponse } from 'shared';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  async getAll(): Promise<CustomResponse<Array<Category>>> {
    const data = await this.service.getAllCategories();
    return { data };
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createCategorySchema))
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<CustomResponse<Category>> {
    const data = await this.service.createCategory(createCategoryDto);
    return { data };
  }
}
