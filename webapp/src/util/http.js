
import axios from 'axios'
import qs from 'qs'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 600000, // 请求超时时间
  paramsSerializer: params => {
    return qs.stringify(params, { indices: false })
  }
})

service.interceptors.request.use(config => {
  console.log('request', config)
  return config
})
service.interceptors.response.use(config => {
  console.log('response', config)
})

export default service
