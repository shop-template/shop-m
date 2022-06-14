<template>
  <div class="block" style="margin-left: 0;margin-right: 0;background: rgba(0,0,0,0);">
    <div class="block-title van-hairline--bottom">签字板演示</div>
    <div class="block-body" style="padding: 0;">
      <signature-pad class="signature-pad-box" downloadName="签名"></signature-pad>
    </div>
  </div>
</template>

<script setup>
import SignaturePad from './../../components/SignaturePad.vue'
</script>

<style lang="less" scoped>
@import './../../styles/demo.less';

.signature-pad-box {
  width: 100%;
  height: 500px;
}
</style>