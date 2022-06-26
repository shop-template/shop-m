<template>
  <template v-if="list.length">
    <van-swipe class="my-swipe" :autoplay="3000" lazy-render>
      <van-swipe-item v-for="item in list">
        <a class="swiper-link" :href="item[config.hrefKey]" target="_blank" rel="noopener noreferrer">
          <img class="swiper-img" :src="item[config.imgKey]" :alt="item[config.lableKey]" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </template>
  <template v-else-if="emptyTips">
    <van-empty :image-size="emptyImgSize" description="暂无数据" />
  </template>
</template>

<script setup>
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
</script>

<style lang="less" scoped>
@import './../styles/common.less';
.my-swipe {
  width: 100%;
  height: 100%;
  background-color: #fff;
  --van-swipe-indicator-size: 8px;
  --van-swipe-indicator-inactive-opacity: 0.2;
  --van-swipe-indicator-inactive-background-color: #000;
  .swiper-link，
  .swiper-img {
    width: 100%;
    height: 100%;
  }
}
</style>