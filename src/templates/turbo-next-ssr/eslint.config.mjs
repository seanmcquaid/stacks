import _import from 'eslint-plugin-import';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import prettier from 'eslint-plugin-prettier';
import * as tanstackQuery from '@tanstack/eslint-plugin-query';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/node_modules/'],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:i18next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vitest/recommended',
    'next/core-web-vitals',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
      'no-relative-import-paths': noRelativeImportPaths,
      prettier,
      '@tanstack/query': tanstackQuery,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'no-shadow': 'off',
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-shadow': 'error',
      curly: ['warn', 'all'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'import/no-anonymous-default-export': 'off',
      'import/order': 'warn',
      'jsx-a11y/no-redundant-roles': 'off',
      'prefer-const': 'warn',
      'prettier/prettier': 'warn',
      'react/jsx-uses-react': 'off',
      'react/jsx-key': 'warn',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-namespace': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',

      'no-relative-import-paths/no-relative-import-paths': [
        'warn',
        {
          allowSameFolder: true,
          rootDir: 'app',
          prefix: '@',
        },
      ],
    },
  },
];
