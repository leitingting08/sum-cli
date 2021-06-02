import axios from 'axios'

axios.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default axios
