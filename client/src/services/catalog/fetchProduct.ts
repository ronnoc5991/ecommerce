import api from "shared";
import { fetchContract } from "./fetchContract";

export default async function fetchProduct(productId: string) {
  return fetchContract({
    contract: api.contracts.product.getOne,
    params: { productId },
  });
}
