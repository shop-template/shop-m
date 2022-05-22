<template>
  <div class="page-title">{{title}}</div>
  <router-view></router-view>
</template>

<script setup>
import { useTitle } from '@vueuse/core'
const title = useTitle()
</script>

<style lang="less" scoped>
@import './../../styles/demo.less';
</style>