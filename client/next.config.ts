import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // should catch Next Links with non existent hrefs during dev/build
  typedRoutes: true,
};

export default nextConfig;
