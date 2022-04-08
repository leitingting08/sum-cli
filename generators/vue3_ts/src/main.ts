import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { components, plugins } from './plugins/element'
import '@/styles/reset.scss'
import request from '@/utils/request'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})

plugins.forEach(plugin => {
    app.use(plugin)
})
app.config.globalProperties.$request = request
app.use(store).use(router).mount('#app')
