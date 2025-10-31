<template>
  <h1>父应用App.vue</h1>
  <el-button @click="toHome">去home页</el-button>
  <el-button @click="toAbout">去about页</el-button>
  <router-view/>
  <el-button @click="loadSubApp = true">加载子应用</el-button>
  <el-button @click="loadSubApp = false">卸载子应用</el-button>

  <h1>-----------------------------------------------</h1>
<!--   name：应用名称, url：应用地址-->
<!--  注意此处data属性必须是一个普通对象，不能是一个ref对象，当对象属性值发生变化时，会自动发送数据给子应用 -->
  <micro-app
      v-if="loadSubApp"
      name='nbb-sub'
      url='http://localhost:4001/'
      :data="{abc: dataKey}"
      disable-memory-router
      disable-patch-request
      iframe></micro-app>
</template>

<script setup lang="ts">

import {ref} from "vue";
import router from "@/router";

const loadSubApp = ref(true)

const dataKey = ref(0);


const toHome = () => {
  router.push({
    path: '/home',
  })
  dataKey.value ++
}
const toAbout = () => {
  router.push('/about')
}

</script>


<style scoped></style>
