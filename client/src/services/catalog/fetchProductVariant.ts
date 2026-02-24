import api from "shared";
import { fetchContract } from "./fetchContract";

export default async function fetchProductVariant(sku: string) {
  return fetchContract({
    contract: api.contracts.variant.getOne,
    params: { sku },
  });
}
