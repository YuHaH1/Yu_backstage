import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import routes from './routes'
import layoutRoutes from './autoLoad'

const router = createRouter({
    history: createWebHistory(),
    routes:[...routes,...layoutRoutes]
})
export const setupRouter =  (app:App) => {
    app.use(router)
}
export default router