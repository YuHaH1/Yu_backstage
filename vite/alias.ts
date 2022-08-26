import path from 'path/win32'
import { AliasOptions } from 'vite'
export const alias = { '@': path.resolve(__dirname, '../src') } as AliasOptions