import { AxiosRequestConfig, AxiosResponse } from 'axios'
import http from '../plugins/axios/index'
interface IUser{
    name:string
}
export function getUserInfoApi(payload:AxiosRequestConfig){
    return http.request<IUser>({
        url:'/api/userinfo'
    })
}
interface ILogin{
    token:string
}
interface ILoginForm{
    userName: string,
    password:string
}
export function loginApi(data:ILoginForm) {
    return http.request<ILogin>({
        url: '/api/login',
        method: 'POST',
        data
    })
}
