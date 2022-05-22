<template>
  <van-nav-bar v-if="layoutNavbar.show" v-bind="layoutNavbar.navbarProps" @click-left="onClickLeft">
  </van-nav-bar>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useLayoutNavbar } from '@/store'

const router = useRouter()
const route = useRoute()
const layoutNavbar = useLayoutNavbar()

watch(
  route,
  (value) => {
    layoutNavbar.show = layoutNavbar.getNavbarShow(route.path)
    document.title = value.meta.title
    layoutNavbar.navbarProps.title = value.meta.title
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
