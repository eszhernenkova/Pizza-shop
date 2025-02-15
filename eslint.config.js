import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  js.configs.recommended, 
  tseslint.configs.recommended, 
  {
    ignores: ['dist', 'node_modules'], 
    files: ['src/**/*.{js,ts,tsx}'], 
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsparser
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      'quotes': ['error', 'single'],
      'react/prop-types': 'off',
      'indent': ['error', 'tab']
    }
  }
];
