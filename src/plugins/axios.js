import axios from 'axios'
import axiosRetry from 'axios-retry'
import { Toast } from 'vant'

const instance = axios.create({
  baseURL: '/api',
  timeout: 3000, //超时配置
  withCredentials: true, //跨域携带cookie
})
axiosRetry(instance, { retries: 3 })

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    console.log('config:', config)
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    console.log('response:', response)
    const { code, data, msg } = response.data
    if (code === 0) {
      return response
    } else {
      return response
    }
    // const { code, data, message } = response.data
    // if (code === 200) return response
    // else if (code === 401) {
    //   jumpLogin()
    // } else {
    //   Toast.fail(message)
    //   return Promise.reject(response.data)
    // }
  },
  function (error) {
    console.log('error-response:', error.response)
    console.log('error-config:', error.config)
    console.log('error-request:', error.request)
    // const { loading = true } = error.config
    // if (loading) cancelLoading()
    // if (error.response) {
    //   if (error.response.status === 401) {
    //     jumpLogin()
    //   }
    // }
    Toast.fail(error?.response?.data?.message || '服务端异常')
    return Promise.reject(error)
  }
)

export default instance
