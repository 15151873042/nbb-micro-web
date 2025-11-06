<template>
  <h1>父应用App.vue</h1>
  <h1>当前主应用路由地址：{{route.path}}</h1>
  <el-row>
    <el-col>
      <el-button @click="toHome">加载主应用home页</el-button>
      <el-button @click="toAbout">加载主应用about页</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <el-button @click="toSubHome">加载子应用home页</el-button>
      <el-button @click="toSubAbout">加载子应用about页</el-button>
    </el-col>
  </el-row>
  <router-view/>


  <h1>-----------------------------------------------</h1>
  <nbb-sub-app1-view/>
</template>

<script setup lang="ts">

import router from "@/router";
import {useRoute} from 'vue-router'

import microApp from '@micro-zoe/micro-app'
import NbbSubApp1View from "@/views/NbbSubApp1View.vue";

const route = useRoute()

const toHome = () => {
  router.push({path: '/home'})
}

const toAbout = () => {
  router.push('/about')
}

// 加载子应用home页
const toSubHome = () => {
  // dataKey.value++
  microApp.router.push({name: 'nbb-sub-app1', path: '/home'});
}

// 加载子应用about页
const toSubAbout = () => {
  // dataKey.value++
  microApp.router.push({name: 'nbb-sub-app1', path: '/about'})
}

// 监听所有子应用的路由变化
microApp.router.beforeEach((to, from, appName) => {
  console.log('全局前置守卫 beforeEach: ', to, from, appName)
})



</script>


<style scoped></style>
