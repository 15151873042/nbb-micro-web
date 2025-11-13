<template>
  <h2>子应用App.vue</h2>
  <h1>当前子应用路由地址：{{route.path}}</h1>
  <el-row>
    <el-col :span="24">
      <el-button @click="toMainHome">加载主应用home页</el-button>
      <el-button @click="toMainAbout">加载主应用about页</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-button @click="toSubHome">加载子应用home页</el-button>
      <el-button @click="toSubAbout">加载子应用about页</el-button>
    </el-col>
  </el-row>
  <router-view/>
</template>

<script setup lang="ts">
import router from "@/router";
import {notifyMainApp, NotifyType} from "@/utils/micro.ts";
import {useRoute} from "vue-router";

const route = useRoute()

const toSubHome = () => {
  router.push({path: '/sub1/home'})
}
const toSubAbout = () => {
  router.push({path: '/sub1/about'})
}
const toMainHome = () => {

notifyMainApp(NotifyType.route_change, {
  path: '/main/home',
  query: {
    id: '123'
  }
})
}
const toMainAbout = () => {

  notifyMainApp(NotifyType.route_change, {
    path: '/main/about',
    query: {
      id: '123'
    }
  })

}

</script>

<style scoped></style>
