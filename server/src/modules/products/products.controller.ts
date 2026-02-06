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
import { Product } from '../../../generated/prisma/client.js';
import { ProductsService } from './products.service.js';
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe.js';
import {
  type CreateProductDto,
  createProductSchema,
  type ServerResponse,
  type GetAllProductsResponse,
  GetAllProducts,
} from 'shared';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // TODO: allow for search params '/products?audience=men&category=shirts'
  // TODO: should this return variants as well?
  @Get()
  async getAll(): Promise<ServerResponse<GetAllProductsResponse>> {
    const allProducts = await this.productsService.getAllProducts();
    const data = GetAllProducts.response.parse(allProducts);
    return { data };
  }

  @Get(':id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ServerResponse<Product>> {
    const product = await this.productsService.getProductById(id);

    if (product === null) {
      // TODO: handle this better
      throw new Error('Unable to find product');
    }

    return { data: product };
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createProductSchema))
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ServerResponse<Product>> {
    const data = await this.productsService.createProduct(createProductDto);
    return { data };
  }

  @Put(':id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(createProductSchema))
    createProductDto: CreateProductDto,
  ): Promise<ServerResponse<Product>> {
    const data = await this.productsService.updateProduct(id, createProductDto);
    return { data };
  }

  @Delete(':id')
  async deleteProduct(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ServerResponse<Product>> {
    const data = await this.productsService.deleteProduct(id);
    return { data };
  }
}
