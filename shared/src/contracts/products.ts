import { z } from "zod";
import { Audience } from "../types/index.js";
import { type APIContract } from "./apiContract.js";

export const createProductSchema = z
  .object({
    name: z.string(),
    description: z.string(),
    audience: z.enum(Audience),
  })
  .required();

export type CreateProductDto = z.infer<typeof createProductSchema>;

type GetProductPathParams = { productId: string };

const getProductResponse = z.object({
  id: z.number(),
  name: z.string(),
  audience: z.enum(Audience),
});

type GetProductResponse = z.infer<typeof getProductResponse>;

export const GetProduct: APIContract<GetProductPathParams, GetProductResponse> =
  {
    httpMethod: "GET",
    getClientPath: ({ productId }) => `/products/${productId}`,
    response: getProductResponse,
  };
