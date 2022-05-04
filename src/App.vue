<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-box">
      <layout-navbar></layout-navbar>
      <router-view></router-view>
      <layout-tabbar></layout-tabbar>
    </div>
  </van-config-provider>
</template>

<script setup>
import LayoutTabbar from './components/LayoutTabbar.vue'
import LayoutNavbar from './components/LayoutNavbar.vue'

const themeVars = {
  tabbarZIndex: 100,
  navBarZIndex: 100
}
</script>

<style>
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
</style>
