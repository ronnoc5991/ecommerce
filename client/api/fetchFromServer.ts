import { type CustomResponse } from "shared";

type ServerResponse<T> =
  | {
      data: T;
      isError: false;
    }
  | {
      data: null;
      isError: true;
    };

export async function fetchFromServer<T>(
  endpoint: string,
  init?: RequestInit,
): Promise<ServerResponse<T>> {
  try {
    // TODO: update with env variable for server domain:port
    const response = await fetch("http://server:3000" + endpoint, init);

    if (!response.ok) {
      throw new Error();
    }

    const { data } = (await response.json()) as CustomResponse<T>;
    return { data, isError: false };
  } catch (e) {
    return {
      isError: true,
      data: null,
    };
  }
}
