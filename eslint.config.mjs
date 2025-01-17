import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Apply to all JavaScript and TypeScript files
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    rules: {
      'no-unused-vars': 'warn', // Warn for unused variables
      'no-explicit-any': 'off', // Allow the `any` type
      'react-hooks/exhaustive-deps': 'warn', // Warn for missing dependencies in hooks
      'react/react-in-jsx-scope': 'off', // Not needed for Next.js
    },
  },

  // Base JavaScript config
  pluginJs.configs.recommended,

  // TypeScript-specific rules
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // Disable no-explicit-any globally
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ], // Fine-tune unused vars rule
    },
  },
];
