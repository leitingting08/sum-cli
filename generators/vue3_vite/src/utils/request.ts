import axios from './axios'
import { Methods } from 'src/axios'
import { ElLoading, ElMessage } from 'element-plus'
/**
 * axios 请求封装
 * @param {*} method 请求方式，默认get
 * @param {*} url 请求地址
 * @param {*} params 请求入参
 * @param {*} options 其他参数
 * options为对象格式,值：
 * @param {*} isLoading(是否激活请求加载动画)
 * @param {*} isSuccessTip(是否展示提示成功tip)
 * 可根据需求扩展其他字段
 */

const request = async (method: Methods, url: string, params?: any, options?: Record<string, unknown>): Promise<any> => {
    let loadingInstance = null

    if (options?.isLoading) {
        loadingInstance = ElLoading.service({ fullscreen: true })
    }

    const result = await axios({ method: method, url, ...(method === 'get' ? { params } : { data: params }) }).catch(
        (err) => {
            ElMessage.error({
                type: 'error',
                message: err.message || '请求失败'
            })
        }
    )
    loadingInstance && loadingInstance.close()
    const res = result.data
    if (options?.isSuccessTip && res.success) {
        ElMessage.success({
            type: 'success',
            message: res.desc || '请求成功'
        })
    } else if (!res.success) {
        ElMessage.error({
            type: 'error',
            message: res.desc || '请求失败'
        })
    }
    return res
}

export default request
