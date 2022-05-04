<template>
  <van-empty description="未发现页面">
    <van-button plain type="primary" @click="goHome">返回首页</van-button>
  </van-empty>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function goHome() {
  router.replace('/')
}
</script>
