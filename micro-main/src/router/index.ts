import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name: 'home',
            path:'/main/home',
            component:() => import('@/views/home.vue')
        },
        {
            name: 'about',
            path:'/main/about',
            component:() => import('@/views/about.vue')
        }
    ]
})


export default router
