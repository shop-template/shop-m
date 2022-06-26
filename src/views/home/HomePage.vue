<template>
  <div class="home-page">
    <div class="swiper-outer">
      <vant-swiper :list="swiper.list"></vant-swiper>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import VantSwiper from '@/components/VantSwiper.vue'
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
@import './../../styles/common.less';
.swiper-outer {
  height: 194px;
}
</style>