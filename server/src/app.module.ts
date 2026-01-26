import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module.js';
import { CategoriesModule } from './modules/categories/categories.module.js';
import { VariantsModule } from './modules/variants/variants.module.js';

@Module({
  imports: [ProductsModule, VariantsModule, CategoriesModule],
})
export class AppModule {}
