<template>
  <van-nav-bar v-if="layoutNavbar.show" v-bind="layoutNavbar.navbarProps" @click-left="onClickLeft">
  </van-nav-bar>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useLayoutNavbar, useLayoutTabbar } from '@/store'

const router = useRouter()
const route = useRoute()
const layoutNavbar = useLayoutNavbar()
const layoutTabbar = useLayoutTabbar()

watch(
  route,
  () => {
    layoutNavbar.show = layoutNavbar.getNavbarShow(route.path)
  },
  {
    deep: true,
    immediate: true
  }
)

function onClickLeft () {
  router.go(-1)
}
</script>

<style scoped>

</style>
