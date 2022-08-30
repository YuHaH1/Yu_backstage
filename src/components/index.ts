import { App } from "vue"

const components = import.meta.glob('../components/global/**/*.vue', {
    eager:true
})


export default (app: App) => {

    Object.entries(components).forEach(([path, module ]) => {
        const name = path.split('/').pop()?.split('.')[0]!
        app.component(name,(module as {[key:string]:any}).default )
        
    })
}