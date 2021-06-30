import axios from './axios'
import Loading from '@/components/loading'
import { message } from 'antd'

/**
 * axios 请求封装
 * @param {*} method 请求方式，默认get
 * @param {*} url 请求地址
 * @param {*} params 请求入参
 * @param {*} options 其他参数
 * options为对象格式,值：
 * isLoading(是否激活请求加载动画)
 * 可根据需求扩展其他字段
 */
const request = (method = 'get', url, data = {}, options) => {
  if (options && options.isLoading) {
    Loading.open()
  }
  axios({
    method,
    url,
    data
  }).then((res) => {
    Loading.close()
    if (res.success) {
      return res.data
    } else {
      message.error(res.desc || '请求失败')
    }
  })
}

export default request
