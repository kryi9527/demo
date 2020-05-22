import {
  get,
  post
} from '@/util/axios'
/**
 * 获取user列表
 * @param {*} data 
 */
export function getUserList(data) {
  return get('/getUserList', data)
}


/**
 * 新增用户
 * @param {*} data 
 */
export function addUser(data) {
  return post('/addUser', data)
}

/**
 * 删除用户
 * @param {*} data 
 */
export function delUser(data) {
  return post('/delUser', data)
}

/**
 * 修改用户
 * @param {*} data 
 */
export function updateUser(data) {
  return post('/updateUser', data)
}
