/**
 * Created by win10 on 2017/11/22.
 */
import axios from 'axios'
// import cookies from 'vue-cookies'

//
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true // 默认携带cookie
// axios.defaults.baseURL = 'http://192.168.3.145:8000'
const instance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})
// instance.defaults.headers.post['Content-Type'] = 'application/json'

// 添加请求拦截器，并赋予全局axios
axios.interceptors.request.use = instance.interceptors.request.use
instance.interceptors.request.use(config => {
  // 在发送请求前做点什么
  if (config.method === 'get' || config.method === 'GET') {
    config.data = true
  }
  return config
}, err => {
  // 对请求错误做点什么
  return Promise.reject(err)
})
// axios添加响应拦截器
instance.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response
}, err => {
  // 对响应错误做点什么
  return Promise.reject(err)
})

/*
function ajax (method, url, data, cb) {
  let token = cookies.get('token')
  if (token) {
    url += '?token=' + token
  }
  var config = {
    method: method,
    url: url
  }
  if (method === 'post' || method === 'POST' || method === 'put' || method === 'PUT') {
    config.data = data
  } else {
    config.params = data
  }
  axios(config)
    .then(function (response) {
      console.log('then', response)
      if (cb) {
        cb(null, response.data)
      }
    })
    .catch(function (error) {
      console.log('catch', error)
      if (cb) {
        cb(error, null)
      }
      console.log(error)
    })
}
axios._ajax = ajax
*/
// export default axios
export default instance
