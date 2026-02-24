import { Controller, Get, Param, Query } from '@nestjs/common';
import api, { AudienceSchema, CategorySlugSchema } from 'shared';
import { CategoriesService } from './categories.service.js';
import { type ContractFulfillment } from 'src/types/ContractFulfillment.js';

const { getAll, getOne } = api.contracts.category;

@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  async getAll(): ContractFulfillment<typeof getAll> {
    const data = await this.service.getAllCategories();
    return { data: getAll.response.parse(data) };
  }

  @Get(':slug')
  async getOne(
    @Param('slug') slug: string,
    @Query('audience') audience?: string,
  ): ContractFulfillment<typeof getOne> {
    const parsedSlug = CategorySlugSchema.safeParse(slug.toLowerCase());
    const parsedAudience = audience
      ? AudienceSchema.safeParse(audience.toUpperCase())
      : null;

    if (
      !parsedSlug.success ||
      (parsedAudience !== null && !parsedAudience.success)
    ) {
      throw new Error('Invalid query');
    }

    const categoryProducts = await this.service.getProductsInCategory(
      parsedSlug.data,
      parsedAudience ? parsedAudience.data : undefined,
    );

    return {
      data: getOne.response.parse({
        products: categoryProducts,
      }),
    };
  }
}
