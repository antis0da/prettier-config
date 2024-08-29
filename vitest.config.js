/// <reference types="vitest" />
import {configDefaults, defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    include: [...configDefaults.include],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint}.config.?(c|m)[jt]s?(x)',
    ],
    coverage: {
      presets: 'v8',
      include: ['lib/*.?(c|m)[jt]s?(x)'],
      exclude: ['lib/*.{test,spec}.?(c|m)[jt]s?(x)'],
      reporters: ['text', 'json', 'html', 'lcov'],
      clean: true,
      thresholds: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
  },
})
