import { RouteLocationNormalized, Router } from "vue-router"
import { IStorage } from "../utils/storage"
import useUtils from '../utils/utils'
let index = 0
class Guard {
    private utils
    private token: null | IStorage
    constructor(private router: Router) {
        this.router = router
        this.run()
        this.utils = useUtils()
        this.token = this.utils.Storage.get('token')


    }
    private run() {
        this.router.beforeEach((to, from) => {
            this.token = this.utils.Storage.get('token')
            
   
            if (this.isGuest(to) === false) return from.path
            
            if (this.alreadyLogin(to)===false) return({ name: 'login' })//已经登陆
          
            
            return true
        })
    }
    private isGuest(route: RouteLocationNormalized):boolean {
        return Boolean(!route.meta.guest||(route.meta.guest&&!this.token))
    }
    private alreadyLogin(route: RouteLocationNormalized): boolean {
        
        if (!route.meta.auth) return true//如果该页面不需要权限允许放行
        else {
            if (this.token) return true//查看token存在否
            else {
                
                return false//不存在拒绝访问
            }

        }

    }

}
export default (route: Router) => {
    return new Guard(route)
}