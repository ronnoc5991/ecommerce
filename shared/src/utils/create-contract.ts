import z from "zod";
import { Contract } from "../types/index.js";

export const createContract = <
  TParams,
  const TSchema extends z.ZodType = z.ZodType,
  const TBodySchema extends z.ZodType | undefined = undefined,
>(
  contract: Contract<TParams, TSchema, TBodySchema>,
) => contract;
