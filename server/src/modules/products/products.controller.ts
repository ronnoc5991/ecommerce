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
import {
  CreateProduct,
  type CreateProductDTO,
  DeleteProduct,
  GetAllProducts,
  GetProduct,
  type ProductDTO,
  ProductSchema,
  UpdateProduct,
} from 'shared';
import { type ContractFulfillment } from '../../types/ContractFulfillment.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAll(): ContractFulfillment<typeof GetAllProducts> {
    const allProducts = await this.productsService.getAllProducts();
    return { data: GetAllProducts.response.parse(allProducts) };
  }

  @Get(':id')
  async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): ContractFulfillment<typeof GetProduct> {
    const product = await this.productsService.getProductById(id);

    if (product === null) {
      throw new Error('Unable to find product');
    }

    return {
      data: GetProduct.response.parse(product),
    };
  }

  @Post()
  @UsePipes(new ZodValidationPipe(CreateProduct.body))
  async create(
    @Body() createProductDto: CreateProductDTO,
  ): ContractFulfillment<typeof CreateProduct> {
    const created = await this.productsService.createProduct(createProductDto);
    return { data: CreateProduct.response.parse(created) };
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(ProductSchema))
    productDto: ProductDTO,
  ): ContractFulfillment<typeof UpdateProduct> {
    const updated = await this.productsService.updateProduct(id, productDto);
    return { data: UpdateProduct.response.parse(updated) };
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ): ContractFulfillment<typeof DeleteProduct> {
    const deleted = await this.productsService.deleteProduct(id);
    return {
      data: DeleteProduct.response.parse(deleted),
    };
  }
}
