import { Controller, Get, Query } from '@nestjs/common';
import api, { AudienceSchema } from 'shared';
import { CatalogService } from './catalog.service.js';
import { type ContractFulfillment } from 'src/types/ContractFulfillment.js';

const { get } = api.contracts.catalog;

@Controller('catalog')
export class CatalogController {
  constructor(private readonly service: CatalogService) {}

  @Get()
  async get(
    @Query('audience') audience: string,
  ): ContractFulfillment<typeof get> {
    const parsedAudience = AudienceSchema.safeParse(audience.toUpperCase());

    if (!parsedAudience.success) {
      throw new Error('Invalid audience');
    }

    const catalog = await this.service.getSegmentedProducts(
      parsedAudience.data,
    );

    return {
      data: get.response.parse({
        audience: parsedAudience.data,
        categories: catalog,
      }),
    };
  }
}
