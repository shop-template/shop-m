import axios from 'axios'
import axiosRetry from 'axios-retry'
import { Toast } from 'vant'

let loadingInstance = null
let requestNum = 0

const addLoading = () => {
  requestNum++
  if (requestNum == 1) {
    loadingInstance = Toast.loading({
      message: '加载中...',
      forbidClick: true,
    })
  }
}

const cancelLoading = () => {
  requestNum--
  if (requestNum === 0) loadingInstance?.clear()
}

const instance = axios.create({
  timeout: 3000, //超时配置
  withCredentials: true, //跨域携带cookie
})

axiosRetry(instance, { retries: 3 })

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    const { loading = true } = config
    console.log('config:', config)
    if (loading) addLoading()
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
    const { loading = true } = response.config
    if (loading) cancelLoading()
    // const { code, data, message } = response.data
    // if (code === 200) return data
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
