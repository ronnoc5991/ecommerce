import contracts from "../contracts/index.js";
import { Audience } from "../types/index.js";
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
      async getAll() {
        return clientFetch({
          contract: contracts.category.getAll,
          params: undefined,
        });
      },
      async getOne(params: { slug: string; audience: Audience }) {
        return clientFetch({
          contract: contracts.category.getOne,
          params,
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
    },
    catalog: {
      async get(params: { audience: Audience; category?: string }) {
        return clientFetch({
          contract: contracts.catalog.get,
          params,
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
