// /** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa')({
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === 'development'
//   })

// const nextConfig = {
//     reactStrictMode: true
// }

// module.exports = withPWA(nextConfig)
const path = require("path");
const withPWAInit = require("next-pwa");

/** @type {import('next-pwa').PWAConfig} */
const withPWA = withPWAInit({
  dest: "public",
  buildExcludes: ["app-build-manifest.json"],
});

const generateAppDirEntry = (entry) => {
  const packagePath = require.resolve('next-pwa');
  const packageDirectory = path.dirname(packagePath);
  const registerJs = path.join(packageDirectory, "register.js");

  return entry().then((entries) => {
    if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
      if (Array.isArray(entries["main-app"])) {
        entries["main-app"].unshift(registerJs);
      } else if (typeof entries["main-app"] === "string") {
        entries["main-app"] = [registerJs, entries["main-app"]];
      }
    }
    return entries;
  });
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    const entry = generateAppDirEntry(config.entry);
    config.entry = () => entry;

    return config;
  },
};

module.exports = withPWA(nextConfig);