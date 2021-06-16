import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { components, plugins } from './plugins/element'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
import 'element-plus/packages/theme-chalk/src/base.scss'
import '@/styles/reset.scss'
import request from '@/utils/request'

locale.use(lang)
const app = createApp(App)
components.forEach((component) => {
    app.component(component.name, component)
})

plugins.forEach((plugin) => {
    app.use(plugin)
})
app.config.globalProperties.$request = request
app.use(store).use(router).mount('#app')
