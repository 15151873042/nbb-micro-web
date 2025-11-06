

<template>
  <!--   name：应用名称, url：应用地址-->
  <!--  注意此处data属性必须是一个普通对象，不能是一个ref对象，当对象属性值发生变化时，会自动发送数据给子应用 -->
  <micro-app
      name='nbb-sub-app1'
      url='http://localhost:4001/'
      :data="{abc: 'abc'}"
      disable-memory-router
      disable-patch-request
      iframe></micro-app>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
