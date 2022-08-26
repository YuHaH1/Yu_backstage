import type { App } from "vue";
import './tailwindcss/tailwindcss.css'
import { registerTailwindcss } from './tailwindcss/index'
export function registerPlugins(app: App) {
    registerTailwindcss()
}