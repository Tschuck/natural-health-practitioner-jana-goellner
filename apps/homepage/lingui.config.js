import { defineConfig } from "@lingui/cli";

export default defineConfig({
  sourceLocale: "de",
  locales: ["de"],
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
});
