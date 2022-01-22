const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER)
    return {
      reactStrictMode: true,
      images:{
        domains:['images.unsplash.com']
      },
      env: {
        mongodb_url: "mongodb://localhost:27017/nextjs-2-dev",
      },
    };
  return {
    reactStrictMode: true,
    env: {
      mongodb_url: "mongodb://localhost:27017/nextjs-2-production",
    },
  };
};
