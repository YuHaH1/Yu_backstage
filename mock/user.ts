import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'




export default [
  {
    url: `/api/userinfo`,
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '操作成功',
        success:true,
        data: { 
          name: 'Yu',
          age:25,
          avatar:'./avatar/yu.jpg'
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        token: Random.string(10),
      },
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 200
      res.end(`hello, ${reqbody}`)
    },
  },
] as MockMethod[]