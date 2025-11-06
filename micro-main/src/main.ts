import {createApp} from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router/index'
import microApp from '@micro-zoe/micro-app'

const app = createApp(App)

app.use(ElementPlus)

app.use(router)

app.mount('#app')


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


// 主应用添加事件监听，监听子应用发送的事件，例如路由跳转
(window as any).addEventListener('child-data', (event: CustomEvent) => {
    console.log("收到子应用的路由跳转事件", event.detail)
    const {notifyType, subAppName, data} = event.detail
    if (notifyType == 'route_change') {
        router.push(data)
    }
})


export {microApp}
