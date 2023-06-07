import axios from 'axios'
import { getUserinfo} from './auth.js'
import qs from 'qs'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    timeout: 10000,
    transformRequest: function(params) {
        if (params instanceof FormData || typeof params === 'undefined') {
            return params
        } else {
            return qs.stringify(params, { arrayFormat: 'repeat', allowDots: true })
        }
    },
    paramsSerializer: {
        serialize: function(params) {
            console.log(params)
            return qs.stringify(params, { arrayFormat: 'repeat', allowDots: true })
        }
    }
})

// request拦截器
service.interceptors.request.use(config => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false
    if (getUserinfo() && !isToken) {
        config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
        let url = config.url + '?';
        for (const propName of Object.keys(config.params)) {
            const value = config.params[propName];
            var part = encodeURIComponent(propName) + "=";
            if (value !== null && typeof(value) !== "undefined") {
                if (typeof value === 'object') {
                    for (const key of Object.keys(value)) {
                        let params = propName + '[' + key + ']';
                        var subPart = encodeURIComponent(params) + "=";
                        url += subPart + encodeURIComponent(value[key]) + "&";
                    }
                } else {
                    url += part + encodeURIComponent(value) + "&";
                }
            }
        }
        url = url.slice(0, -1);
        config.params = {};
        config.url = url;
    }
    return config
}, error => {
    Promise.reject(error)
})
let refreshing = false,// 正在刷新标识，避免重复刷新
    waitQueue = [] // 请求等待队列
// 响应拦截器
service.interceptors.response.use(({config, data}) => {
        // 未设置状态码则默认成功状态
        const {code, msg} = data
        if(code === 200){
            return data
        }else if (code === 1230) { // access_token过期，尝试续期token
            if (refreshing === false) {
                refreshing = true  // 切换正在刷新标识，其他请求先进请求等待队列中
                const refreshToken = getRefreshToken()
                const oldToken = getToken()
                return new Promise((resolve,reject) => {

                })
            } else {
                return new Promise(resolve =>  waitQueue.push((token) => {
                    config.headers['Authorization'] = token
                    resolve(service(config))
                }))
            }
        }else if(code === 1232){
            return Promise.reject(new Error(msg))
        } else if (code === 1231) { // token被禁止访问，添加到黑名单，跳转至登录页

            return Promise.reject(new Error(msg))
        }else if (code === 401) {

            return Promise.reject(new Error(msg))
        } else if (code === 500) {

            return Promise.reject(new Error(msg))
        } else {
            Notification.error(msg || '系统出错')
            return Promise.reject('error')
        }
    },
    error => {
        let { message } = error;
        if (message === "Network Error") {
            message = "后端接口连接异常";
        }
        else if (message.includes("timeout")) {
            message = "系统接口请求超时";
        }
        else if (message.includes("Request failed with status code 400")) {
            message = "对不起，数据格式错误，请联系管理员";
        }
        else if (message.includes("Request failed with status code")) {
            // message = "系统接口" + message.substr(message.length - 3) + "异常";
            message = "对不起，您无此权限，若要继续使用，请联系管理员";
        }

        return Promise.reject(error)
    }
)
export default service
