/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.node = {
        fs: "empty",
        child_process: "empty",
        net: "empty",
        tls: "empty",
      };
    },
  },
};
