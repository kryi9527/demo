import {
  get,
  post
} from '../util/axios'
/**
 * 获取图书列表
 * @param {*} params 
 */
export function getBookList(params) {
  return get('/getBookList', params)
}

/**
 * 添加图书
 * @param {*} params 
 */
export function addBook(params) {
  return post('/addBook', params)
}

/**
 * 删除图书
 * @param {*} params 
 */
export function delBook(params) {
  return post('/delBook', params)
}

/**
 * 更新图书
 * @param {*} params 
 */
export function updateBook(params) {
  return post('/updateBook', params)
}
