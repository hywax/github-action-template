/// <reference types="vitest" />
import { builtinModules } from 'node:module'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const external = [...builtinModules, ...builtinModules.map((m) => `node:${m}`)]

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    sourcemap: true,
    rollupOptions: {
      external,
      output: {
        inlineDynamicImports: true,
      },
      preserveSymlinks: true,
    },
  },
  test: {},
})
