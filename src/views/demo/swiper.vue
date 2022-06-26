<template>
  <div class="block block-no-margin">
    <div class="block-title van-hairline--bottom">
      <a class="block-title-a" href="https://vant-contrib.gitee.io/vant/#/zh-CN/swipe" target="_blank" rel="noopener noreferrer">1. vant swiper 封装</a>
      <icon-outside-station></icon-outside-station>
    </div>
    <div class="block-body block-body-no-padding">
      <div class="swiper-outer">
        <vant-swiper :list="swiper.list"></vant-swiper>
      </div>
    </div>
  </div>
  <div class="block block-no-margin">
    <div class="block-title van-hairline--bottom">
      <a class="block-title-a" href="https://www.swiper.com.cn/" target="_blank" rel="noopener noreferrer">2. swiper 封装</a>
      <icon-outside-station></icon-outside-station>
    </div>
    <div class="block-body block-body-no-padding">
      <div class="swiper-outer">
        <swiper-component :list="swiper.list"></swiper-component>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import SwiperComponent from '@/components/SwiperComponent.vue'
import VantSwiper from '@/components/VantSwiper.vue'
import IconOutsideStation from '@/components/IconOutsideStation.vue'
import shopHome from '@/assets/home-swiper/shop-home.png'
import shopGuide from '@/assets/home-swiper/shop-guide.png'
import shopPlugins from '@/assets/home-swiper/shop-plugins.png'

const swiper = reactive({
  list: [
    {
      id: 1,
      img: shopHome,
      href: 'https://shop-template.github.io/shop-m-docs/',
      label: 'shop-m 首页'
    },
    {
      id: 2,
      img: shopGuide,
      href: 'https://shop-template.github.io/shop-m-docs/guide/',
      label: 'shop-m 指南'
    },
    {
      id: 3,
      img: shopPlugins,
      href: 'https://shop-template.github.io/shop-m-docs/plugins/',
      label: 'shop-m 插件'
    },
    {
      id: 4,
      img: 'https://img.fxss.work/article-165612593200016-production.png',
      href: 'https://shop-template.github.io/shop-m-docs/',
      label: 'shop-m 首页'
    },
    {
      id: 5,
      img: 'https://img.fxss.work/article-165612593700062-production.png',
      href: 'https://shop-template.github.io/shop-m-docs/guide/',
      label: 'shop-m 指南'
    },
    {
      id: 6,
      img: 'https://img.fxss.work/article-165612594100064-production.png',
      href: 'https://shop-template.github.io/shop-m-docs/plugins/',
      label: 'shop-m 插件'
    }
  ]
})

</script>

<style lang="less" scoped>
@import './../../styles/demo.less';
.swiper-outer {
  height: 194px;
}
</style>