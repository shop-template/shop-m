<template>
  <div class="block">
    <div class="block-title van-hairline--bottom">1. setNavbar</div>
    <div class="block-body">
      <van-button size="small" type="primary" @click="setNavbarEvent">设置导航栏</van-button>
    </div>
  </div>
  <div class="block">
    <div class="block-title van-hairline--bottom">2. hideNavbar</div>
    <div class="block-body">
      <van-button size="small" type="primary" @click="hideNavbarEvent">隐藏navbar</van-button>
    </div>
  </div>
  <div class="block">
    <div class="block-title van-hairline--bottom">3. showNavbar</div>
    <div class="block-body">
      <van-button size="small" type="primary" @click="showNavbarEvent">显示navbar</van-button>
    </div>
  </div>
  <div class="block">
    <div class="block-title van-hairline--bottom">4. dontShowListAdd</div>
    <div class="block-body">
      <van-button size="small" type="primary" @click="dontShowListAddEvent">为不显示 navbar 的列表中新添项</van-button>
      <div class="block-text">{{layoutNavbar.dontShowList}}</div>
    </div>
  </div>
  <div class="block">
    <div class="block-title van-hairline--bottom">5. dontShowListRemove</div>
    <div class="block-body">
      <van-button size="small" type="primary" @click="dontShowListRemoveEvent">为不显示 navbar 的列表中删除项</van-button>
      <div class="block-text">{{layoutNavbar.dontShowList}}</div>
    </div>
  </div>
  <div class="block">
    <div class="block-title van-hairline--bottom">6. getNavbarShow</div>
    <div class="block-body">
      <van-button size="small" type="primary" @click="getNavbarShowEvent">获取 /navBar 是否显示 navbar</van-button>
      <div class="block-text">{{layoutNavbar.show}}</div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useLayoutNavbar } from '@/store'

const layoutNavbar = useLayoutNavbar()

function setNavbarEvent () {
  layoutNavbar.setNavbar({
    title: '标题',
    'left-text': '返回'
  })
}

function hideNavbarEvent () {
  layoutNavbar.hideNavbar()
}

function showNavbarEvent () {
  layoutNavbar.showNavbar()
}

function dontShowListAddEvent () {
  layoutNavbar.dontShowListAdd('/navBar')
}

function dontShowListRemoveEvent () {
  layoutNavbar.dontShowListRemove('/navBar')
}

function getNavbarShowEvent () {
  layoutNavbar.show = layoutNavbar.getNavbarShow('/navBar')
}
</script>

<style lang="less" scoped>
@import './../../styles/demo.less';
</style>