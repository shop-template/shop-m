<template>
  <div class="block">
    <div class="block-title van-hairline--bottom">1. Dialog</div>
    <div class="block-body">
      <van-button size="small" type="primary" @click="openDialogEvent">打开 Dialog</van-button>
      <van-button size="small" type="primary" @click="changeDialogConfirmButtonTextColorEvent">切换确认按钮颜色</van-button>
    </div>
  </div>
</template>

<script setup>
import { nextTick } from 'vue'
import { Dialog } from 'vant'
import { useCssVar } from '@vueuse/core'

// https://vueuse.org/core/useCssVar/
// 使用 useCssVar 读取 css 变量 --van-dialog-confirm-button-text-color
const dialogConfirmButtonTextColor = useCssVar('--van-dialog-confirm-button-text-color', document.body)

function openDialogEvent () {
  Dialog.confirm({
    title: '标题',
    message: `确认按钮的颜色为${dialogConfirmButtonTextColor.value}`,
  })
    .then(() => {
      // on confirm
    })
    .catch(() => {
      // on cancel
    })
}

function changeDialogConfirmButtonTextColorEvent () {
  // 注意：这里加 .trim() 是为了兼容 chrome 在某些情况下 window.getComputedStyle(document.body).getPropertyValue('--van-dialog-confirm-button-text-color') = '  #1989fa' 的问题
  if (dialogConfirmButtonTextColor.value.trim() === '#1989fa') {
    dialogConfirmButtonTextColor.value = '#f00'
  } else {
    dialogConfirmButtonTextColor.value = '#1989fa'
  }
  nextTick(() => {
    openDialogEvent()
  })
}
</script>

<style lang="less" scoped>
@import './../../styles/demo.less';
</style>