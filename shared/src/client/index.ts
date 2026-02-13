import contracts from "../contracts/index.js";
import { Audience, ContractBody } from "../types/index.js";
import { createClientFetch } from "./client-fetch.js";

export type ClientConfig = {
  host?: string;
};

// TODO: think about this arrangement...
// should all of these be created in separate places?
// imported and used here?
export function createClient(config: ClientConfig) {
  const clientFetch = createClientFetch(config);

  return {
    category: {
      async create(
        createCategoryDTO: ContractBody<typeof contracts.category.create>,
      ) {
        return clientFetch({
          contract: contracts.category.create,
          params: undefined,
          body: createCategoryDTO,
        });
      },
      async getAll() {
        return clientFetch({
          contract: contracts.category.getAll,
          params: undefined,
        });
      },
    },
    product: {
      async getAll(params: { audience: Audience }) {
        return clientFetch({
          contract: contracts.product.getAll,
          params: params,
        });
      },
      async getOne(productId: string) {
        return clientFetch({
          contract: contracts.product.getOne,
          params: { productId },
        });
      },
      async deleteProduct(productId: string) {
        return clientFetch({
          contract: contracts.product.deleteOne,
          params: { productId },
        });
      },
      async create(
        createProductDTO: ContractBody<typeof contracts.product.create>,
      ) {
        return clientFetch({
          contract: contracts.product.create,
          params: undefined,
          body: createProductDTO,
        });
      },
      async update(productDTO: ContractBody<typeof contracts.product.update>) {
        return clientFetch({
          contract: contracts.product.update,
          params: { productId: productDTO.id },
          body: productDTO,
        });
      },
    },
    variant: {
      async getOne(sku: string) {
        return clientFetch({
          contract: contracts.variant.getOne,
          params: { sku },
        });
      },
    },
  };
}
