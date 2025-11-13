import {createRouter, createWebHistory} from 'vue-router'
import {isMicroEnvironment} from "@/utils/micro.ts";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name: 'home',
            path:'/sub1/home',
            component:() => import('@/views/home.vue')
        },
        {
            name: 'about',
            path:'/sub1/about',
            component:() => import('@/views/about.vue')
        }
    ]
})

const setupDataListener = () => {
    if(isMicroEnvironment()) {
        (window as any).microApp.addDataListener((data: any) => {
            console.log('来自主应用的数据', data)
        }, true)
    }
}

setupDataListener()


export default router
