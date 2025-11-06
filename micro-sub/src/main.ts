import {createApp} from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router/index'
import {isMicroEnvironment} from "@/utils/micro.ts";

let app: any = null


/**
 * 挂载应用
 * @param props 主应用传递的props
 */
const mount = (props?: any) => {
    console.log(props)
    app = createApp(App)
    app.use(router)
    app.use(ElementPlus)
    return app.mount('#app')
}

/**
 * 卸载应用
 */
const unmount = () => {
    app.unmount()
}



// 判断当前环境
if (isMicroEnvironment()) {
    // 微前端环境，等待主应用加载
    // 主应用加载子应用时，会自动调用window.mount
    // 主应用卸载子应用时，会自动调用window.unmount
    (window as any).mount = mount;
    (window as any).unmount = unmount;
} else {
    // 普通环境，手动挂在应用
    mount();
}




