/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.mjs
export default {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zpnhgxcgkjrdcempcdqc.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

// export default nextConfig;
