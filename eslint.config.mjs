import eslintJs from '@eslint/js';
import tsLint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintReact from '@eslint-react/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig(
  eslintJs.configs.recommended,
  tsLint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  eslintConfigPrettier,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.tsx'],
    extends: [eslintJs.configs.recommended, tsLint.configs.recommended, eslintReact.configs['recommended-typescript']],
    languageOptions: {
      parser: tsLint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@eslint-react/no-missing-key': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
  {
    ignores: ['**/node_modules', '**/dist'],
  }
);
