import { Controller, Get, Param } from '@nestjs/common';
import { VariantsService } from './variants.service.js';
import { type ContractFulfillment } from 'src/types/ContractFulfillment.js';
import api from 'shared';

const { getOne } = api.contracts.variant;

@Controller('variants')
export class VariantsController {
  constructor(private readonly variantsService: VariantsService) {}

  @Get(':sku')
  async getById(@Param('sku') sku: string): ContractFulfillment<typeof getOne> {
    const data = await this.variantsService.getVariantBySku(sku);

    if (data === null) {
      // TODO: handle this better
      throw new Error('Unable to find variant');
    }

    return { data: getOne.response.parse(data) };
  }
}
