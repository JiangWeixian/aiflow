import path from 'node:path'

import { defineConfig } from 'vitest/config'

const config = defineConfig({
  test: {
    include: ['./test/**/*'],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
})

export default config
