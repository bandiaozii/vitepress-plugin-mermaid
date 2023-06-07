import request from '../utils/request.js'
// 获取路由
export const getRouters = (query) => {
    console.log(query)
    return request.post('/xxx', query)
}