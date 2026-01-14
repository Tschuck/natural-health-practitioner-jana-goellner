import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { lingui } from "@lingui/vite-plugin";
import dotenv from "dotenv";

dotenv.config({ path: [".env.default", ".env"], quiet: true });

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["@lingui/babel-plugin-lingui-macro"],
      },
    }),
    tsconfigPaths(),
    lingui(),
  ],
  server: {
    port: 3111,
    allowedHosts: [],
  },
  build: {
    minify: "terser",
  },
});
