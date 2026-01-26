import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module.js';
import { ProductsModule } from './modules/products/products.module.js';
import { VariantsModule } from './modules/variants/variants.module.js';
import { CategoriesModule } from './modules/categories/categories.module.js';

@Module({
  imports: [HealthModule, ProductsModule, VariantsModule, CategoriesModule],
})
export class AppModule {}
