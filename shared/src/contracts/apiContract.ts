import { z } from "zod";

export type APIContract<TPathParams, TResponse> = {
  httpMethod: "GET" | "POST" | "PUT" | "DELETE";
  getClientPath: (params: TPathParams) => string;
  response: z.ZodType<TResponse>;
};
