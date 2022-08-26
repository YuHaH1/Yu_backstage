/**
 * 该文件用于注册一些插件
 */
import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import registersMockjs  from './mock/index'
export default function registerPlugins(isBuild: boolean, env: Record<string, any>) {
    const pluginsArray:Plugin[] = []
    pluginsArray.push(vue())
    pluginsArray.push(registersMockjs(isBuild))
    return pluginsArray
}