<template>
  <h2>子应用App.vue</h2>
  <el-button @click="toHome">去home页</el-button>
  <el-button @click="toAbout">去about页</el-button>
  <router-view/>
</template>

<script setup lang="ts">
import router from "@/router";

const toHome = () => {
  router.push('/home')
}
const toAbout = () => {
  router.push('/about')
}
</script>

<style scoped></style>
