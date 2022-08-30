import { RouteRecordRaw } from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue'),
        meta: { auth: true },
    }, {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: "login",
        component: () => import('@/views/Auth/login.vue'),
        meta: {
            guest: true
        }
    }

] as RouteRecordRaw[]
export default routes