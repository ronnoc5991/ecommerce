import api, { Audience } from "shared";
import { fetchContract } from "./fetchContract";

export default async function fetchCategory(params: {
  slug: string;
  audience: Audience;
}) {
  return fetchContract({
    contract: api.contracts.category.getOne,
    params,
  });
}
