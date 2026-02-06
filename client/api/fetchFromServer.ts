import { type APIContract } from "shared";

const HOST = "localhost:3000";

type APIResult<T> =
  | {
      ok: true;
      data: T;
    }
  | {
      ok: false;
      error: unknown;
    };

export async function fetchFromServer<TPathParams, TResponse>({
  contract,
  pathParams,
  init,
}: {
  contract: APIContract<TPathParams, TResponse>;
  pathParams: TPathParams;
  init?: RequestInit;
}): Promise<APIResult<TResponse>> {
  try {
    const response = await fetch(
      `${HOST}${contract.getClientPath(pathParams)}`,
      {
        method: contract.httpMethod,
        ...init,
      },
    );

    if (!response.ok) {
      return {
        ok: false,
        error: new Error(`HTTP ${response.status}`),
      };
    }

    const json = await response.json();
    const data = contract.response.parse(json);

    return { ok: true, data };
  } catch (error) {
    return { ok: false, error };
  }
}
