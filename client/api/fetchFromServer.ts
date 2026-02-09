import { ContractResponse, ContractWithBody, type Contract } from "shared";
import z from "zod";

// TODO: move this to env
const HOST = "http://server:3000";

type APIResult<T extends Contract<any, any, any>> = Promise<
  | (ContractResponse<T> & {
      ok: true;
    })
  | {
      ok: false;
      error: unknown;
    }
>;

export async function fetchFromServer<const T extends Contract<any, any, any>>({
  contract,
  pathParams,
  body,
  init,
}: T extends ContractWithBody<any, any, any>
  ? {
      contract: T;
      pathParams: Parameters<T["getClientPath"]>[0];
      body: z.infer<T["body"]>;
      init?: RequestInit;
    }
  : {
      contract: T;
      pathParams: Parameters<T["getClientPath"]>[0];
      body?: never;
      init?: RequestInit;
    }): APIResult<T> {
  let serializedBody: string | undefined;

  if ("body" in contract) {
    const parsed = contract.body.parse(body);
    serializedBody = JSON.stringify(parsed);
  }

  try {
    const response = await fetch(
      `${HOST}${contract.getClientPath(pathParams)}`,
      {
        ...init,
        method: contract.httpMethod,
        body: serializedBody,
        headers: {
          "Content-Type": "application/json",
          ...init?.headers,
        },
      },
    );

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
