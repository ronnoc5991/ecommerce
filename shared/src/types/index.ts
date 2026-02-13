import z from "zod";

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

type BaseContract<TParams, TResponseValidator extends z.ZodType> = {
  httpMethod: HTTPMethod;
  getClientPath: (params: TParams) => string;
  response: TResponseValidator;
};

export type ContractWithoutBody<
  TParams,
  TResponseValidator extends z.ZodType,
> = BaseContract<TParams, TResponseValidator> & {
  body?: never;
};

export type ContractWithBody<
  TParams,
  TResponseValidator extends z.ZodType,
  TBodyValidator extends z.ZodType,
> = BaseContract<TParams, TResponseValidator> & {
  body: TBodyValidator;
};

export type Contract<
  TParams,
  TResponseValidator extends z.ZodType,
  TBodyValidator extends z.ZodType | undefined = undefined,
> = TBodyValidator extends z.ZodType
  ? ContractWithBody<TParams, TResponseValidator, TBodyValidator>
  : ContractWithoutBody<TParams, TResponseValidator>;

export type ContractResponse<T extends Contract<any, z.ZodType, any>> = {
  data: z.infer<T["response"]>;
};

export type ContractBody<T extends ContractWithBody<any, any, any>> = z.infer<
  T["body"]
>;

// TODO: this should be exposed
// TODO: How can we keep this in sync with the prisma generated types?
export enum Audience {
  MEN = "MEN",
  WOMEN = "WOMEN",
  UNISEX = "UNISEX",
}
