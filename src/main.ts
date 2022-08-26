import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router, { setupRouter } from './router/index'
import { registerPlugins } from './plugins/index'
(async () => {
    const app = createApp(App)
    setupRouter(app)
    registerPlugins(app)
    //等路由加载完成后再挂载页面
    await router.isReady()
    app.mount('#app')
})()