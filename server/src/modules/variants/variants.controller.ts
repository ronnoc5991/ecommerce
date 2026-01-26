import { Controller, Get, Param } from '@nestjs/common';
import { VariantsService, VariantSummary } from './variants.service.js';
import { CustomResponse } from 'shared';

@Controller('variants')
export class VariantsController {
  constructor(private readonly variantsService: VariantsService) {}

  @Get(':sku')
  async getById(
    @Param('sku') sku: string,
  ): Promise<CustomResponse<VariantSummary>> {
    const data = await this.variantsService.getVariantBySku(sku);

    if (data === null) {
      // TODO: handle this better
      throw new Error('Unable to find variant');
    }

    return { data };
  }

  // @Post()
  // @UsePipes(new ZodValidationPipe(createVariantSchema))
  // async createVariant(
  //   @Body() createVariantDto: CreateVariantDto,
  // ): Promise<Variant> {
  //   return this.variantsService.createVariant(createVariantDto);
  // }

  // @Put(':id')
  // async updateVariant(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body(new ZodValidationPipe(createVariantSchema))
  //   createVariantDto: CreateVariantDto,
  // ): Promise<Variant> {
  //   console.log(createVariantDto);
  //   return this.variantsService.updateVariant(id, createVariantDto);
  // }

  // @Delete(':id')
  // async deleteVariant(@Param('id', ParseIntPipe) id: number): Promise<Variant> {
  //   return this.variantsService.deleteVariant(id);
  // }
}
