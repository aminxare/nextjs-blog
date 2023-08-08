const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const isGithubActions = process.env.GITHUB_ACTIONS || false;

  let assetPrefix = "";
  let basePath = "/";

  if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

    assetPrefix = `/${repo}/`;
    basePath = `/${repo}`;
  }

  if (phase === PHASE_DEVELOPMENT_SERVER)
    return {
      reactStrictMode: true,
      images: {
        domains: ["images.unsplash.com"],
      },
      env: {
        mongodb_url: "mongodb://localhost:27017/nextjs-2-dev",
      },
    };
  return {
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
      loader: 'akamai',
      path: '',
    },
    reactStrictMode: true,
    env: {
      mongodb_url: "mongodb://localhost:27017/nextjs-2-production",
    },
  };
};
