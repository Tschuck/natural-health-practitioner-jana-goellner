import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import swc from 'unplugin-swc';

const config = defineConfig({
  plugins: [
    // Point this at your monorepo base if you use tsconfig.base.json
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    swc.vite({ swcrc: false }),
  ],
});

export default config;
