import { Injectable } from '@nestjs/common';

@Injectable()
export class CatalogService {
  async get(): Promise<string> {
    return 'hello there';
  }
}
