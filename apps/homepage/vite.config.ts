import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { lingui } from '@lingui/vite-plugin';
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react-swc';

dotenv.config({ path: ['.env.default', '.env'], quiet: true });

export default defineConfig({
  plugins: [
    react({
      tsDecorators: true,
      plugins: [
        [
          '@lingui/swc-plugin',
          {
            runtime: 'automatic',
          },
        ],
      ],
    }),
    tsconfigPaths(),
    lingui(),
  ],
  server: {
    port: 3111,
    allowedHosts: [],
  },
  build: {
    minify: 'terser',
  },
});
