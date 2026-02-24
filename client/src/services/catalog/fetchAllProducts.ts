import api, { Audience } from "shared";
import { fetchContract } from "./fetchContract";

export default async function fetchAllProducts(params: { audience: Audience }) {
  return fetchContract({
    contract: api.contracts.product.getAll,
    params: params,
  });
}
