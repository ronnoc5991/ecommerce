import z from "zod";

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

type BaseContract<TPathParams, TResponseValidator extends z.ZodType> = {
  httpMethod: HTTPMethod;
  getClientPath: (params: TPathParams) => string;
  response: TResponseValidator;
};

export type ContractWithoutBody<
  TPathParams,
  TResponseValidator extends z.ZodType,
> = BaseContract<TPathParams, TResponseValidator> & {
  body?: never;
};

export type ContractWithBody<
  TPathParams,
  TResponseValidator extends z.ZodType,
  TBodyValidator extends z.ZodType,
> = BaseContract<TPathParams, TResponseValidator> & {
  body: TBodyValidator;
};

export type Contract<
  TPathParams,
  TResponseValidator extends z.ZodType,
  TBodyValidator extends z.ZodType | undefined = undefined,
> = TBodyValidator extends z.ZodType
  ? ContractWithBody<TPathParams, TResponseValidator, TBodyValidator>
  : ContractWithoutBody<TPathParams, TResponseValidator>;

export type ContractResponse<T extends Contract<any, z.ZodType, any>> = {
  data: z.infer<T["response"]>;
};

export type ContractBody<T extends ContractWithBody<any, any, any>> = z.infer<
  T["body"]
>;
export enum Audience {
  MEN = "MEN",
  WOMEN = "WOMEN",
  UNISEX = "UNISEX",
}
