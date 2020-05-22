import {
  get,
  post
} from '@/util/axios'
/**
 * 登录
 * @param {*} data 
 */
export function login(data) {
  return post('/login', data)
}
