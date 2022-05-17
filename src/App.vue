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
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import LayoutTabbar from './components/LayoutTabbar.vue'
import LayoutNavbar from './components/LayoutNavbar.vue'

const Router = useRouter()
const themeVars = {
  tabbarZIndex: 100,
  navBarZIndex: 100
}

// 跨域iframe通信
function getParentInfo() {
  //接受父页面发来的消息
  window.addEventListener('message', event => {
    // 根据上面制定的结构来解析iframe内部发回来的数据
    const data = event.data
    switch (data.cmd) {
      case 'setPath':
        Router.push(data.res.path)
        break
    }
  })
}
onMounted(() => {
  getParentInfo()
})
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
