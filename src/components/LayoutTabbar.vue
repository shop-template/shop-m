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
    // 切换 tabbar 的 active
    layoutTabbar.active = layoutTabbar.pathToName(route.path)
    // 默认只有配置在 layoutTabbar 中的 tabbar 才会展示
    layoutTabbar.show = layoutTabbar.tabbarToList.includes(route.path)
  },
  {
    deep: true,
    immediate: true
  }
)
</script>
