import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import routes from './routes'
import layoutRoutes from './autoLoad'
import userRouteGuard from './guard' 


const router = createRouter({
    history: createWebHistory(),
    routes:[...routes,...layoutRoutes]
})
userRouteGuard(router)




export const setupRouter =  (app:App) => {
    app.use(router)
}
export default router