import { fetchFromServer } from "./fetchFromServer";

export default async function fetchProductVariant(sku: string) {
  // TODO: this does not return a string
  return fetchFromServer<string>(`/variants/${sku}`);
}
