import Vue from 'unplugin-vue/rolldown';
import { defineConfig } from 'vite-plus';

const ignorePatterns = [
  '.nuxt',
  '.output',
  'dist',
  'node_modules',
  '.wrangler',
  'coverage',
];

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: 'happy-dom',
    include: ['test/**/*.spec.ts'],
  },
  pack: {
    entry: ['src/index.ts'],
    format: ['esm'],
    platform: 'neutral',
    sourcemap: true,
    dts: { vue: true },
    plugins: [Vue({ isProduction: true })],
    deps: {
      neverBundle: ['vue'],
    },
  },
  lint: {
    plugins: ['typescript', 'vue', 'import'],
    ignorePatterns,
  },
  fmt: {
    printWidth: 80,
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'lf',
    vueIndentScriptAndStyle: true,
    ignorePatterns: [...ignorePatterns, 'pnpm-lock.yaml', '**/CHANGELOG.md'],
  },
});
