import z from "zod";
import { CreateProductSchema, ProductSchema } from "../schemas/index.js";
import { createContract } from "../utils/create-contract.js";
import { Audience } from "../types/index.js";

const Create = createContract({
  httpMethod: "POST",
  getClientPath: () => "/products/",
  body: CreateProductSchema,
  response: ProductSchema,
});

const Delete = createContract({
  httpMethod: "DELETE",
  getClientPath: ({ productId }) => `/products/${productId}`,
  response: ProductSchema,
});

const GetAll = createContract({
  httpMethod: "GET",
  getClientPath: ({ audience }: { audience: Audience }) =>
    `/products?audience=${audience}`,
  response: z.array(ProductSchema),
});

const GetOne = createContract({
  httpMethod: "GET",
  getClientPath: ({ productId }: { productId: string }) =>
    `/products/${productId}`,
  response: ProductSchema,
});

const Update = createContract({
  httpMethod: "PUT",
  getClientPath: ({ productId }) => `/products/${productId}`,
  body: ProductSchema,
  response: ProductSchema,
});

export default {
  create: Create,
  deleteOne: Delete,
  getAll: GetAll,
  getOne: GetOne,
  update: Update,
};
