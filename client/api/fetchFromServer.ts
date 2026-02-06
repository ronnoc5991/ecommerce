import { ServerResponse, type APIContract } from "shared";

// TODO: move this to env
const HOST = "http://server:3000";

type APIResult<T> =
  | {
      ok: true;
      data: T;
    }
  | {
      ok: false;
      error: unknown;
    };

// TODO: think through the 'shared' aspect of this....
// the server returns a standard shaped response
// that is the shared response
// so every response (if it is 'ok') will be of that shape
// we are immediately reshaping that thing in this function...
// why do we need the shared response then?  Just to standardize the return across endpoints?
// what would it look like if we did not have a standardized return shape?

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

    const json = (await response.json()) as ServerResponse<TResponse>;
    const data = contract.response.parse(json.data);

    return { ok: true, data };
  } catch (error) {
    return { ok: false, error };
  }
}
