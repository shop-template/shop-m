<template>
  <div class="page-head">shop-m 个人移动端项目模板</div>
  <van-cell-group>
    <van-cell v-for="item in cellList" :key="item.icon" v-bind="item" />
  </van-cell-group>
</template>

<script setup>
import demoRouters from './../../router/demo'

const cellList = demoRouters[0].children.map(item => {
  return {
    title: item.meta.title,
    to: `${demoRouters[0].path}/${item.path}`,
    'is-link': true
  }
})
</script>

<style lang="less" scoped>
@import './../../styles/demo.less';
</style>