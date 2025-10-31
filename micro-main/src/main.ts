import {createApp} from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router/index'

const app = createApp(App)

app.use(ElementPlus)

app.use(router)

app.mount('#app')


import microApp from '@micro-zoe/micro-app'

microApp.start({
    lifeCycles: {
        created (e, appName) {
            console.log(`子应用${appName}被创建`)
        },
        beforemount (e, appName) {
            console.log(`子应用${appName}即将渲染`)
        },
        mounted (e, appName) {
            console.log(`子应用${appName}已经渲染完成`)
        },
        unmount (e, appName) {
            console.log(`子应用${appName}已经卸载`)
        },
        error (e, appName) {
            console.log(`子应用${appName}加载出错`)
        }
    }
});

export {microApp}
