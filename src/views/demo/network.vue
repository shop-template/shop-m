<template>
  <div class="block">
    <div class="block-body">
      <van-button size="small" type="primary" @click="goBackEvent">返回上一页</van-button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { Notify } from 'vant'

onMounted(() => {
  Notify({ type: 'danger', message: '您当前处于断网，请联网后使用', duration: 0 })
})

onBeforeUnmount(() => {
  Notify.clear()
})

const router = useRouter()
function goBackEvent () {
  router.go(-1)
}
</script>

<style lang="less" scoped>
@import './../../styles/demo.less';
</style>
