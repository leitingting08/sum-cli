import { ComponentInternalInstance, getCurrentInstance } from 'vue'
import { Methods } from 'src/axios'
interface AppInstance extends Record<string, any> {
    $request: <T = any>(method: Methods, url: string, params?: any, options?: Record<string, unknown>) => Promise<T>
}

export default function useCurrentInstance() {
    const { appContext } = getCurrentInstance() as ComponentInternalInstance
    const proxy = appContext.config.globalProperties as AppInstance
    return {
        proxy
    }
}
