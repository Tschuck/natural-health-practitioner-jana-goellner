import { defineConfig } from '@lingui/cli';

export default defineConfig({
  sourceLocale: 'de',
  locales: ['de', 'en'],
  catalogs: [
    {
      path: '<rootDir>/src/i18n/locales/{locale}/messages',
      include: ['src'],
    },
  ],
});
