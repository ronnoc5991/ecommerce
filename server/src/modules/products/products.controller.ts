import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import api, { AudienceSchema } from 'shared';
import { type ContractFulfillment } from '../../types/ContractFulfillment.js';

const { getAll, getOne } = api.contracts.product;

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAll(
    @Query('audience') audience: string,
  ): ContractFulfillment<typeof getAll> {
    const result = AudienceSchema.safeParse(audience.toUpperCase());

    if (!result.success) {
      throw new Error('Invalid audience');
    }

    const allProducts = await this.productsService.getAllProducts({
      audience: result.data,
    });

    return { data: getAll.response.parse(allProducts) };
  }

  @Get(':id')
  async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): ContractFulfillment<typeof getOne> {
    const product = await this.productsService.getProductById(id);

    if (product === null) {
      throw new Error('Unable to find product');
    }

    return {
      data: getOne.response.parse(product),
    };
  }
}
