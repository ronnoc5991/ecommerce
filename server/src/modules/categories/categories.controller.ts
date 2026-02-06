import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import {
  type CreateCategoryDto,
  type ServerResponse,
  createCategorySchema,
} from 'shared';
import { CategoriesService } from './categories.service.js';
import { Category } from '../../../generated/prisma/client.js';
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe.js';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  async getAll(): Promise<ServerResponse<Array<Category>>> {
    const data = await this.service.getAllCategories();
    return { data };
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createCategorySchema))
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<ServerResponse<Category>> {
    const data = await this.service.createCategory(createCategoryDto);
    return { data };
  }
}
