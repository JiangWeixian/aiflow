import { defineConfig } from 'tsup'
import { isDev } from './scripts/utils'
import dotenv from 'dotenv'

const envs = dotenv.config({ path: './.env' }).parsed ?? {}

export default defineConfig(() => ({
  entry: {
    'background/index': './src/background/main.ts',
    ...(isDev ? { mv3client: './scripts/client.ts' } : {}),
  },
  noExternal: [/./],
  outDir: 'extension/dist',
  format: ['esm'],
  target: 'esnext',
  ignoreWatch: ['**/extension/**'],
  splitting: false,
  sourcemap: isDev ? 'inline' : false,
  define: {
    __DEV__: JSON.stringify(isDev),
    'import.meta.env': JSON.stringify({
      MODE: isDev ? 'development' : 'production',
    }),
    'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
    'process.env.OPENAI_API_KEY': isDev ? JSON.stringify(envs.OPENAI_API_KEY) : JSON.stringify(""),
  },
  platform: 'browser',
  minifyWhitespace: !isDev,
  minifySyntax: !isDev,
}))
