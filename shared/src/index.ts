export * from "./contracts/index.js";
export * from "./types/index.js";

// this will define the shape of all responses...
// what is it?  It is really just a 'response'? A SharedResponse?
export type SharedResponse<T> = {
  data: T;
};
