import { ConfigEnv, defineConfig, loadEnv } from 'vite'

import path from 'path'
import { alias } from './vite/alias'
import { parseEnv } from './vite/utils'
import registerPlugins from './vite/plugins/index'
// https://vitejs.dev/config/


export default ({ command, mode }: ConfigEnv) => {

  const isBuild = command==='build'
  const root = process.cwd()
  //由于import.meta.env获取的全都是字符串格式的键值对，因此我们需要对值做判断更改类型
  const env =   parseEnv(loadEnv(mode, root))


  return {
    //plugins:[vue()] 
    plugins:registerPlugins(isBuild,env),
    resolve: {
      alias
    }
  }
}