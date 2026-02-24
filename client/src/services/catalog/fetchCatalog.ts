import api, { Audience } from "shared";
import { fetchContract } from "./fetchContract";

export default async function fetchCatalog(params: {
  audience: Audience;
  category?: string;
}) {
  return fetchContract({
    contract: api.contracts.catalog.get,
    params,
  });
}
