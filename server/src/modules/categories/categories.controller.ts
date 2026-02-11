import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import api from 'shared';
import z from 'zod';
import { CategoriesService } from './categories.service.js';
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe.js';
import { type ContractFulfillment } from 'src/types/ContractFulfillment.js';

const { create, getAll } = api.contracts.category;

@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  async getAll(): ContractFulfillment<typeof getAll> {
    const data = await this.service.getAllCategories();
    return { data: getAll.response.parse(data) };
  }

  @Post()
  @UsePipes(new ZodValidationPipe(create.body))
  async createCategory(
    @Body() createCategoryDto: z.infer<typeof create.body>,
  ): ContractFulfillment<typeof create> {
    const data = await this.service.createCategory(createCategoryDto);
    return { data: create.response.parse(data) };
  }
}
