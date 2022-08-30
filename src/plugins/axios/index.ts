import axios, { AxiosRequestConfig } from 'axios'
import { parseEnv } from '../../../vite/utils'
class Axios {
    private instance
    constructor(config: AxiosRequestConfig = {
        timeout: 10000
    }) {
        this.instance = axios.create(config)
        this.interceptors()
    }
    public async request<T, D = ResponseRes<T>>(payload: AxiosRequestConfig):Promise<D> {
        return new Promise(async(resolve, reject) => {
            try {
                const res = await this.instance.request<D>(payload)
                resolve(res.data)
            } catch (error) {
                reject(error)
            }
        })
    }
    private interceptors() {
        this.interceptorRequest()
        this.interceptorResponse()
    }
    private interceptorRequest() {
        this.instance.interceptors.request.use(config => {
            return config
        }, err => {
            return Promise.reject(err)
        })
    }
    private interceptorResponse() {
        this.instance.interceptors.response.use(res => {
            return res
        }, err => {
            return Promise.reject(err)
        })
    }
}
const service = new Axios({
    timeout: 5000,
    // baseURL:parseEnv().VITE_BASE_URL
})
export default service


