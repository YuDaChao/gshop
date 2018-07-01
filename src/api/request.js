import axios from 'axios'

let axiosIns = axios.create({})

// if (process.env.NODE_ENV === 'development') {
//   axiosIns.defaults.baseURL = 'http://127.0.0.1:4000'
// } else if (process.env.NODE_ENV === 'production') {
//   axiosIns.defaults.baseURL = 'http://127.0.0.0:5000'
// } else {
//   axiosIns.defaults.baseURL = 'http://127.0.0.1:4000'
// }

// 添加请求拦截器
axiosIns.interceptors.request.use(function (config) {
  // 设置请求头
  config.headers['content-type'] = 'application/x-www-form-urlencoded'
  // 如果有
  let token = window.localStorage.getItem('token')
  if (token) {
    config.headers['token'] = token
  }
  return config
}, function (error) {
  console.log('error request params ...')
  return Promise.reject(error)
})

// 响应拦截器
axiosIns.interceptors.response.use(function (resp) {
  if (!resp.data) {
    return Promise.reject(resp)
  }
  return Promise.resolve(resp.data)
}, function (error) {
  return Promise.reject(error)
})

const ajaxMethods = ['get', 'post']

const api = {}

ajaxMethods.forEach(method => {
  api[method] = function (url, data) {
    return new Promise((resolve, reject) => {
      axiosIns[method](url, data)
        .then(resp => {
          resolve(resp)
        })
    }).catch(error => {
      return Promise.reject(error)
    })
  }
})

export default api
