import { GetAllProducts, GetProduct } from "shared";
import { fetchFromServer } from "./fetchFromServer";

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
