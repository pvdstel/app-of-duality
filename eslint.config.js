// @ts-check

import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
const config = [
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
    },
    {
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                projectService: {
                    allowDefaultProject: [
                        'eslint.config.js',
                        'vite.config.ts',
                    ],
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    stylistic.configs.customize({
        commaDangle: 'always-multiline',
        flat: true,
        indent: 4,
        jsx: false,
        quotes: 'single',
        semi: true,
    }),
    {
        rules: {
            '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        },
    },
];
export default config;
