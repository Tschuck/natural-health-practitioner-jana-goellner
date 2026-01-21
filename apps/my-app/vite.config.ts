import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { lingui } from '@lingui/vite-plugin';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

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
    vike(),
    tailwindcss(),
    lingui(),
  ],
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
    },
  },
  server: {
    port: 3111,
    allowedHosts: [],
  },
});
