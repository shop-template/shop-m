<template>
  <van-tabbar v-if="layoutTabbar.show" v-model="layoutTabbar.active" v-bind="layoutTabbar.tabbarProps">
    <van-tabbar-item v-for="item in layoutTabbar.tabbar" :key="item.name" v-bind="item">{{item.title}}</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutTabbar } from '@/store'

const route = useRoute()
const layoutTabbar = useLayoutTabbar()

watch(
  route,
  () => {
    layoutTabbar.active = layoutTabbar.pathToName(route.path)
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style scoped>

</style>
