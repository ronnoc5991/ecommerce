export * from "./schemas/index.js";
export * from "./types/index.js";
export * from "./dto/index.js";

import contracts from "./contracts/index.js";
import { createClient } from "./client/index.js";

// TODO: think about how we want to expose all of this

export default {
  contracts,
  createClient,
};
