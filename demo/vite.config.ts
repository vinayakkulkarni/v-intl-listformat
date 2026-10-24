import { defineConfig } from 'vite-plus';

// vite-plus drives the demo unit tests only (`vp test`). Nuxt owns the app
// build and does not read this file.
export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});
