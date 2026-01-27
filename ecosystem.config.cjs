module.exports = {
  apps: [
    {
      name: 'backend',
      cwd: './apps/backend',
      autorestart: true,
      script: 'pnpm start',
      watch: ['./build/development/**/*', './build/development/*', './.env', './.env.default'],
    },
    {
      name: 'homepage',
      cwd: './apps/homepage',
      script: 'pnpm dev',
      watch: ['./build/development/**/*', './build/development/*', './.env', './.env.default'],
    },
  ],
};
