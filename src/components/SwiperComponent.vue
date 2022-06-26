<template>
  <swiper 
    :modules="modules"
    :loop="list.length > 1"
    :lazy="{ loadPrevNext: true }"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    @swiper="onSwiper">
    <template v-if="list.length">
      <swiper-slide v-for="item in list">
        <a class="swiper-link" :href="item[config.hrefKey]" target="_blank" rel="noopener noreferrer">
          <img class="swiper-img swiper-lazy" :data-src="item[config.imgKey]" :alt="item[config.lableKey]">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
        </a>
      </swiper-slide>
    </template>
    <template v-else-if="emptyTips">
      <swiper-slide>
        <van-empty :image-size="emptyImgSize" description="暂无数据" />
      </swiper-slide>
    </template>
  </swiper>
</template>

<script setup>
import { Autoplay, Pagination, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/lazy'

const props = defineProps({
  // swiper信息列表
  list: {
    type: Array,
    default() {
      return []
    }
  },
  // swiper 信息的 key
  config: {
    type: Object,
    default() {
      return {
        idKey: 'id',
        imgKey: 'img',
        hrefKey: 'href',
        lableKey: 'label'
      }
    }
  },
  // 是否显示 空提示
  emptyTips: {
    type: Boolean,
    default: true
  },
  // 空提示时的图片大小，https://vant-contrib.gitee.io/vant/#/zh-CN/empty#props
  emptyImgSize: {
    type: [String, Number, Array],
    default: '28vw'
  }
})

const modules = [Autoplay, Pagination, Lazy]

const onSwiper = (swiper) => {
  console.log(swiper)
}
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.swiper-slide {
  width: 100%;
  height: 100%;

  .swiper-link，
  .swiper-img {
    width: 100%;
    height: 100%;
  }
}
</style>