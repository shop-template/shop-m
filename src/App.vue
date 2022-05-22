<template>
  <div class="page-box">
    <layout-navbar></layout-navbar>
    <router-view></router-view>
    <layout-tabbar></layout-tabbar>
  </div>
</template>

<script setup>
import { watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Notify } from 'vant'
import LayoutTabbar from './components/LayoutTabbar.vue'
import LayoutNavbar from './components/LayoutNavbar.vue'
import VConsole from 'vconsole'
import { useOnline } from '@vueuse/core'

// 网络监听，当断网时自动提示
// https://vueuse.org/core/useOnline/
const online = useOnline()
watchEffect(() => {
  if (!online.value) {
    Notify({ type: 'danger', message: '您当前处于断网，请联网后使用', duration: 0 })
  } else {
    Notify.clear()
  }
})

const Router = useRouter()
const Route = useRoute()
// 当 Route.query.vconsole 存在时，初始化 vconsole
watchEffect(() => {
  if (Route.query.vconsole) {
    new VConsole()
  }
})
</script>

<style lang="less">
#app {
  font-family: var(--van-base-font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: var(--van-font-size-md);
  color: var(--van-gray-8);
}
.page-box {
  min-height: 100vh;
  background-color: var(--van-gray-2);
}
@import './styles/common.less';
</style>
