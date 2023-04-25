import { defineConfig } from 'vite'

import { isDev, r } from './scripts/utils'
import { sharedConfig } from './vite.config'

// bundling the content script using Vite
export default defineConfig({
  ...sharedConfig,
  build: {
    watch: isDev
      ? {
          include: [r('src/contentScripts/**/*'), r('src/components/**/*'), r('src/logic/**/*')],
        }
      : undefined,
    outDir: r('extension/dist/contentScripts'),
    minify: !isDev,
    cssCodeSplit: false,
    emptyOutDir: false,
    sourcemap: isDev ? 'inline' : false,
    lib: {
      entry: r('src/contentScripts/index.tsx'),
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'index.global.js',
      },
    },
  },
  plugins: [...sharedConfig.plugins!],
})
