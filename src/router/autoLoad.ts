
import { RouteRecordRaw } from "vue-router"
interface IModule {
    [key: string]: any
}
const layout = import.meta.glob('../layout/*.vue', {//vite 2.0提供的动态导入文件 导入布局页面的路由
    eager: true
}),
    views = import.meta.glob('../views/**/*.vue', {//两个*代表递归子目录寻找.vue文件
        eager: true
    }),//
    view = import.meta.glob('../views/*.vue',{eager:true}),
    routes = [] as RouteRecordRaw[],

    getRouteByModule = (filePath: string, module: { [key: string]: any }, child: boolean = false) => {
        const name = filePath.split('/').pop()?.split('.')[0].toLocaleLowerCase(),
            component = module.default,
            path = !child ? '/' + name : name!
                 
        const route = {
            name,
            path,
            component
        }
        return Object.assign(route,module.default?.route)
    },
    getRoutes = () => {//生成布局路由
        Object.entries(layout).forEach(([filePath, module]) => {
            const route = getRouteByModule(filePath, module as IModule)
            route.children = getChildrenRoutes(route)
            routes.push(route)
         
        })
     
        
        return Array.from(new Set(routes))
    },
    getChildrenRoutes = (route: RouteRecordRaw) => {
        const child_routes = [] as RouteRecordRaw[]
        Object.entries(views).forEach(([filePath, module]) => {
            if (filePath.toLocaleLowerCase().includes(`../views/${String(route.name).toLocaleLowerCase()}`)) {
                const route = getRouteByModule(filePath, module as IModule,true)
                child_routes.push(route)
            }
        })
        return child_routes
    },
    getViewFirstRoute = () => {
        const routes = [] as RouteRecordRaw[]
        Object.entries(view).forEach(([path, module]) => {
            if(path.includes('home'))return
            const route = getRouteByModule(path, module as {[key:string]:any})
            routes.push(route)
        })
        return Array.from(new Set(routes))
    }
export default [...getRoutes(),...getViewFirstRoute()]