<template>
  <div class="user-page">
    <div @click="userHeaderClick" class="user-header">
      <div class="user-img-box">
        <van-image v-if="userInfo.headerImg" class="user-img" lazy-load :src="userInfo.headerImg" @click.stop="userImgPreview"></van-image>
        <van-image v-else class="user-img" lazy-load></van-image>
      </div>
      <div class="user-content">
        <template v-if="userStore.isLogin">
          <div class="user-name van-ellipsis">{{ userInfo.name }}</div>
          <div class="user-account van-ellipsis">账号：{{ userInfo.account }}</div>
        </template>
        <template v-else>
          <div class="user-name van-ellipsis">登录 | 注册</div>
        </template>
      </div>
      <div class="user-header-right">
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="user-body mgt-middle">
      <van-cell-group>
        <van-cell v-for="item in cellList" :key="item.icon" v-bind="item" />
      </van-cell-group>
    </div>

    <van-image-preview v-model:show="userImgShow" :images="[userInfo.headerImg]" closeable>
      <template v-slot:index>{{ userInfo.name }}</template>
    </van-image-preview>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store'
import cookie from '@/plugins/cookie'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const userToken = cookie.get(import.meta.env.VITE_token)
const { userInfo, isLogin } = storeToRefs(userStore)
if (userToken && !isLogin.value) {
  userStore.getUserInfoFn()
}

function userHeaderClick () {
  if (!isLogin.value) {
    router.push({ path: '/login', query: { from: 'user' } })
  } else {
    router.push({ path: '/userInfo' })
  }
}

const userImgShow = ref(false)
function userImgPreview () {
  userImgShow.value = true
}

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
    padding: @padding-middle @padding-large;
    .display-flex-center();
    background-color: #fff;
    &:active {
      background-color: var(--van-cell-active-color);
    }
    .user-content {
      flex: auto;
      min-width: 0;
      margin-left: @margin-small;
      .user-name {
        font-size: 18px;
        font-weight: 700;
        line-height: 38px;
        height: 38px;
      }
      .user-account {
        font-size: 14px;
        line-height: 30px;
        height: 30px;
      }
    }
    .user-header-right {
      padding: 0 @padding-small;
      margin-right: @margin-small * -1;
      height: 68px;
      .display-flex-center();
      font-size: 20px;
      color: var(--van-cell-right-icon-color);
    }
  }
}
</style>