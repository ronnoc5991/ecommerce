import { GetProduct } from "shared";
import { fetchFromServer } from "./fetchFromServer";

export async function fetchProduct(productId: string) {
  return fetchFromServer({
    contract: GetProduct,
    pathParams: { productId },
  });
}
