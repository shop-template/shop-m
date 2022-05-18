<template>
  <div class="page-title">tabbar 使用演示</div>
  <div class="block">
    <div class="block-title van-hairline--bottom">1. setTabBarItem</div>
    <div class="block-body">
      <van-button size="small" type="primary" @click="setTabBarItemEvent">设置首页</van-button>
      <van-button size="small" type="primary" @click="setTabBarItem1Event">设置商场</van-button>
    </div>
  </div>
  <div class="block">
    <div class="block-title van-hairline--bottom">2. addTabbar</div>
    <div class="block-body">
      <van-button size="small" type="primary" @click="addTabbarEvent">新增列表</van-button>
    </div>
  </div>
  <div class="block">
    <div class="block-title van-hairline--bottom">3. removeTabbar</div>
    <div class="block-body">
      <van-button size="small" type="primary" @click="removeTabbarEvent">删除（1）</van-button>
      <van-button size="small" type="primary" @click="removeTabbarEvent2">删除（/shopping-cart）</van-button>
    </div>
  </div>
  <div class="block">
    <div class="block-title van-hairline--bottom">4. hideTabbar</div>
    <div class="block-body">
      <van-button size="small" type="primary" @click="hideTabbarEvent">隐藏tabbar</van-button>
    </div>
  </div>
  <div class="block">
    <div class="block-title van-hairline--bottom">5. showTabbar</div>
    <div class="block-body">
      <van-button size="small" type="primary" @click="showTabbarEvent">显示tabbar</van-button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useLayoutTabbar } from '@/store'

const layoutTabbar = useLayoutTabbar()

function setTabBarItemEvent () {
  layoutTabbar.setTabBarItem({
    index: 0,
    detail: {
      icon: 'wap-home-o',
      title: 'home',
      dot: true
    }
  })
}

function setTabBarItem1Event () {
  layoutTabbar.setTabBarItem({
    index: 1,
    detail: {
      icon: 'wap-home-o',
      title: 'home',
      dot: true
    }
  })
}

function addTabbarEvent () {
  layoutTabbar.addTabbar({
    index: 1,
    detail: {
      icon: 'bar-chart-o',
      title: '列表',
      to: '/list',
      badge: 10
    }
  })
}

function removeTabbarEvent () {
  layoutTabbar.removeTabbar(1)
}

function removeTabbarEvent2 () {
  layoutTabbar.removeTabbar('/shopping-cart')
}

function hideTabbarEvent () {
  layoutTabbar.hideTabbar()
}

function showTabbarEvent () {
  layoutTabbar.showTabbar()
}
</script>

<style lang="less" scoped>
@import './../../styles/demo.less';
</style>