import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // should catch Next Links with non existent hrefs during dev/build
  typedRoutes: true,
  sassOptions: {
    additionalData: "@use '@/styles/variables' as *;",
  },
};

export default nextConfig;
