module.exports = {
  apps: [
    {
      name: "backend",
      cwd: "./apps/backend",
      script: "dist/main.js"
    },
    {
      name: "frontend",
      cwd: "./apps/homepage",
      script: "pnpm",
      args: "preview"
    }
  ]
};
