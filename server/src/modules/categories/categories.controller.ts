import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import {
  CreateCategory,
  type CreateCategoryDTO,
  GetAllCategories,
} from 'shared';
import { CategoriesService } from './categories.service.js';
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe.js';
import { type ContractFulfillment } from 'src/types/ContractFulfillment.js';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  async getAll(): ContractFulfillment<typeof GetAllCategories> {
    const data = await this.service.getAllCategories();
    return { data: GetAllCategories.response.parse(data) };
  }

  @Post()
  @UsePipes(new ZodValidationPipe(CreateCategory.body))
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDTO,
  ): ContractFulfillment<typeof CreateCategory> {
    const data = await this.service.createCategory(createCategoryDto);
    return { data: CreateCategory.response.parse(data) };
  }
}
