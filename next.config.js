/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const removeImports = require("next-remove-imports");
const withPWA  = require("next-pwa");

// module.exports = removeImports(nextConfig)({
//   // ✅  options...
//   webpack: function (config) {
//     config.module.rules.push({
//       test: /\.md$/,
//       use: "raw-loader"
//     });
//     return config;
//   }
// });

module.exports = withPWA()

// module.exports = nextConfig