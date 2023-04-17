import { r } from './utils'
import fs from 'node:fs'

const bg = fs.readFileSync(r('extension/dist/background/index.mjs'), 'utf-8')

if (bg.includes('sk-')) {
  throw new Error('api key found')
}
