import { createContract } from "../utils/create-contract.js";
import { CatalogSchema } from "../schemas/catalog.js";
import { Audience } from "../types/index.js";

export const Get = createContract({
  httpMethod: "GET",
  getClientPath: ({
    audience,
    category,
  }: {
    audience: Audience;
    category?: string;
  }) =>
    `/catalog?audience=${audience}${category ? `&category=${category}` : ""}`,
  response: CatalogSchema,
});

export default {
  get: Get,
};
