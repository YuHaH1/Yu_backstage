import type { App } from "vue";
import './tailwindcss/tailwindcss.css'
import { registerTailwindcss } from './tailwindcss/index'
import Axios from "./axios";
import registerElementPlus from './elementPlus/elementPlus'
export function registerPlugins(app: App) {
    registerTailwindcss()
    registerElementPlus(app)
}