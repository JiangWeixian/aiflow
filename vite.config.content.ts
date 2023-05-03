import { defineConfig } from 'vite'

import { isDev, r } from './scripts/utils'
import { sharedConfig } from './vite.config'

// bundling the content script using Vite
export default defineConfig({
  ...sharedConfig,
  build: {
    watch: isDev
      ? {
          include: [r('src/contentScripts/**/*'), r('src/components/**/*'), r('src/logic/**/*'), r('src/hooks/**/*')],
        }
      : undefined,
    outDir: r('extension/dist/contentScripts'),
    minify: !isDev,
    cssCodeSplit: false,
    emptyOutDir: false,
    sourcemap: isDev ? 'inline' : false,
    lib: {
      entry: r('src/contentScripts/index.tsx'),
      // export token undefined
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        // TODO: try .mjs
        entryFileNames: 'index.global.js',
        format: 'cjs',
      },
    },
  },
  plugins: [...sharedConfig.plugins!],
})
