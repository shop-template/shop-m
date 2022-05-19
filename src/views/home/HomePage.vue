<template>
  <div class="page-head">shop-m 个人移动端项目模板</div>
  <van-cell-group>
    <van-cell v-for="item in cellList" :key="item.icon" v-bind="item" />
  </van-cell-group>
</template>

<script setup>
import { reactive } from 'vue'

const cellList = reactive([
  {
    title: 'NavBar 导航栏',
    to: '/navBar',
    border: true,
    'is-link': true
  },
  {
    title: 'Tabbar 标签栏',
    to: '/tabbar',
    border: true,
    'is-link': true
  }
])
</script>

<style scoped>
@import './../../styles/demo.less';
</style>