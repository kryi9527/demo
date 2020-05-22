import axios from 'axios'
axios.defaults.timeout = 5 * 1000; // 响应时间
axios.defaults.baseURL = '/test'; // 默认地址
// get请求
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
// post请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
