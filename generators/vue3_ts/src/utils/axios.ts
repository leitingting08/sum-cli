import axios from 'axios'

const instance = axios.create({
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

// 请求拦截器
instance.interceptors.request.use(
    function (config) {
        for (const i in config.params) {
            // 当参数值为 null 时，需要删除，那么统一命名为 __NULL__
            if (config.params[i] === '__NULL__') {
                delete config.params[i]
            }
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default instance
