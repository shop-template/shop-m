<template>
  <van-button type="primary" plain block @click="loginOutEvent">退出</van-button>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
function loginOutEvent () {
  userStore.loginOutFn().then(res => {
    router.push('/login')
  }).catch(err => {
    console.log(err)
  })
}
</script>

<style lang="less" scoped>

</style>