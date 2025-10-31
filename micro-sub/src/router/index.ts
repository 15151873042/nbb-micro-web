import {createRouter, createWebHistory} from 'vue-router'
import {isMicroEnvironment} from "@/utils/micro.ts";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            component:() => import('@/views/home.vue')
        },
        {
            path:'/about',
            component:() => import('@/views/about.vue')
        }
    ]
})

const setupDataListener = () => {
    debugger
    if(isMicroEnvironment()) {
        (window as any).microApp.addDataListener((data: any) => {
            console.log('来自主应用的数据', data)
        }, true)
    }
}

setupDataListener()


export default router
