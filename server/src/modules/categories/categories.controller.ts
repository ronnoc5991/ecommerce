import { Controller, Get } from '@nestjs/common';
import api from 'shared';
import { CategoriesService } from './categories.service.js';
import { type ContractFulfillment } from 'src/types/ContractFulfillment.js';

const { getAll } = api.contracts.category;

@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  async getAll(): ContractFulfillment<typeof getAll> {
    const data = await this.service.getAllCategories();
    return { data: getAll.response.parse(data) };
  }
}
