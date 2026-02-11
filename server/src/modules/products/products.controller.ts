import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe.js';
import api from 'shared';
import { type ContractFulfillment } from '../../types/ContractFulfillment.js';
import z from 'zod';

const { create, deleteOne, getAll, getOne, update } = api.contracts.product;

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAll(): ContractFulfillment<typeof getAll> {
    const allProducts = await this.productsService.getAllProducts();
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

  @Post()
  @UsePipes(new ZodValidationPipe(create.body))
  async create(
    @Body() createProductDto: z.infer<typeof create.body>,
  ): ContractFulfillment<typeof create> {
    const created = await this.productsService.createProduct(createProductDto);
    return { data: create.response.parse(created) };
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(update.body))
    productDto: z.infer<typeof update.body>,
  ): ContractFulfillment<typeof update> {
    const updated = await this.productsService.updateProduct(id, productDto);
    return { data: update.response.parse(updated) };
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ): ContractFulfillment<typeof deleteOne> {
    const deleted = await this.productsService.deleteProduct(id);
    return {
      data: deleteOne.response.parse(deleted),
    };
  }
}
