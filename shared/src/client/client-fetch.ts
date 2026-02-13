import z from "zod";
import {
  Contract,
  ContractResponse,
  ContractWithBody,
} from "../types/index.js";
import { ClientConfig } from "./index.js";

type APIResult<T extends Contract<any, any, any>> = Promise<
  | (ContractResponse<T> & {
      ok: true;
    })
  | {
      ok: false;
      error: unknown;
    }
>;

// binds host to 'fetch'er
export function createClientFetch({ host }: ClientConfig) {
  async function clientFetch<const T extends Contract<any, any, any>>({
    contract,
    params,
    body,
    init,
  }: T extends ContractWithBody<any, any, any>
    ? {
        contract: T;
        params: Parameters<T["getClientPath"]>[0];
        body: z.infer<T["body"]>;
        init?: RequestInit;
      }
    : {
        contract: T;
        params: Parameters<T["getClientPath"]>[0];
        body?: never;
        init?: RequestInit;
      }): APIResult<T> {
    let serializedBody: string | undefined;

    if ("body" in contract) {
      const parsed = contract.body.parse(body);
      serializedBody = JSON.stringify(parsed);
    }

    try {
      const response = await fetch(`${host}${contract.getClientPath(params)}`, {
        ...init,
        method: contract.httpMethod,
        body: serializedBody,
        headers: {
          "Content-Type": "application/json",
          ...init?.headers,
        },
      });

      if (!response.ok) {
        return {
          ok: false,
          error: new Error(`HTTP ${response.status}`),
        };
      }

      const { data } = (await response.json()) as ContractResponse<T>;

      return { ok: true, data };
    } catch (error) {
      return { ok: false, error };
    }
  }

  return clientFetch;
}
