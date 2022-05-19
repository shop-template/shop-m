<template>
  <div class="user-page">
    <div class="user-header">
      <div class="user-img-box">
        <van-image class="user-img" lazy-load src="https://img.fxss.work/header-1583418772000-23-production"></van-image>
      </div>
      <div class="user-content">
        <div class="user-name van-ellipsis">樊小书生</div>
        <div class="user-account van-ellipsis">账号：13000001111</div>
      </div>
      <div class="user-header-right">
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="user-body">
      <van-cell-group>
        <van-cell v-for="item in cellList" :key="item.icon" v-bind="item" />
      </van-cell-group>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const cellList = reactive([
  {
    title: '钱包',
    value: '',
    label: '',
    icon: 'paid',
    to: '',
    border: true,
    'is-link': true
  },
  {
    title: '设置',
    value: '',
    label: '',
    icon: 'setting-o',
    to: '',
    border: true,
    'is-link': true
  }
])
</script>

<style lang="less" scoped>
@import './../../styles/common.less';
.user-page {
  .user-header {
    padding: @padding-base * 1.5 @padding-base * 2;
    .display-flex-center();
    background-color: #fff;
    &:active {
      background-color: var(--van-cell-active-color);
    }
    @size: 68px;
    .user-img-box,
    .user-img {
      flex: 0 0 @size;
      width: @size;
      height: @size;
      border-radius: @img-radius;
      overflow: hidden;
    }
    .user-content {
      flex: auto;
      min-width: 0;
      margin-left: @margin-base;
      .user-name {
        font-size: 18px;
        font-weight: 700;
        line-height: 38px;
      }
      .user-account {
        font-size: 14px;
        line-height: 30px;
      }
    }
    .user-header-right {
      padding: 0 @padding-base;
      margin-right: @margin-base * -1;
      height: @size;
      .display-flex-center();
      font-size: 20px;
      color: var(--van-cell-right-icon-color);
    }
  }
  .user-body {
    .mgt-md();
  }
}
</style>