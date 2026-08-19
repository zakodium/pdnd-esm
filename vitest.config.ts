import { defineConfig } from 'vitest/config';

export default defineConfig({
  oxc: {
    include: 'src/**/*.{cts,ts}',
  },
  test: {
    coverage: {
      include: ['src/**'],
      exclude: ['src/.npmignore'],
      provider: 'v8',
    },
    setupFiles: [
      // 'vitest.setup.ts',
    ],
  },
});
