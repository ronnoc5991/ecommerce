import {
  ContractBody,
  CreateProduct,
  DeleteProduct,
  GetAllProducts,
  GetProduct,
  UpdateProduct,
} from "shared";
import { fetchFromServer } from "./fetchFromServer";

// TODO:
// create a single object with these methods?
// client.products.fetchAll
// client.products.fetchOne
// client.products.delete

export async function fetchAllProducts() {
  return fetchFromServer({
    contract: GetAllProducts,
    pathParams: undefined,
  });
}

export async function fetchProduct(productId: string) {
  return fetchFromServer({
    contract: GetProduct,
    pathParams: { productId },
  });
}

export async function deleteProduct(productId: string) {
  return fetchFromServer({
    contract: DeleteProduct,
    pathParams: { productId },
  });
}

export async function create(product: ContractBody<typeof CreateProduct>) {
  return fetchFromServer({
    contract: CreateProduct,
    pathParams: undefined,
    body: product,
  });
}

export async function update(product: ContractBody<typeof UpdateProduct>) {
  return fetchFromServer({
    contract: UpdateProduct,
    pathParams: { productId: product.id },
    body: product,
  });
}
