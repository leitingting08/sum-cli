import axios from './axios'
import { ElLoading, ElMessage } from 'element-plus'
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

const request = async (method: any, url: string, data: object = {}, options = { isLoading: true }) => {
    let loadingInstance: any = null

    if (options && options.isLoading) {
        loadingInstance = ElLoading.service({ fullscreen: true })
    }
    const result = await axios({ method, url, data }).catch((err) => {
        ElMessage.error({
            type: 'error',
            message: err.message || '请求失败'
        })
    })
    loadingInstance && loadingInstance.close()
    const { success, data: resultData, desc } = result.data
    if (success) {
        ElMessage.success({
            type: 'success',
            message: desc || '请求成功'
        })
    } else {
        ElMessage.error({
            type: 'error',
            message: desc || '请求失败'
        })
    }
    return resultData
}

export default request
