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
import { Product } from '../../generated/prisma/client.js';
import { ProductsService } from './products.service.js';
import {
  createProductSchema,
  type CreateProductDto,
} from './products.schema.js';
import { ZodValidationPipe } from '../pipes/zod-validation-pipe.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAll(): Promise<Array<Product>> {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    const product = await this.productsService.getProductById(id);

    if (product === null) {
      // TODO: handle this better
      throw new Error('Unable to find product');
    }

    return product;
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createProductSchema))
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productsService.createProduct(createProductDto);
  }

  @Put(':id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(createProductSchema))
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    console.log(createProductDto);
    return this.productsService.updateProduct(id, createProductDto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.deleteProduct(id);
  }
}
