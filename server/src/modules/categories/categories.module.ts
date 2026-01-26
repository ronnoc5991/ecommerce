import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller.js';
import { CategoriesService } from './categories.service.js';

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
