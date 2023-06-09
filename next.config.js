/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: `http://localhost:4200/uploads/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
