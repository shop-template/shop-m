<template>
  <div class="block" style="margin-left: 0;margin-right: 0;background: rgba(0,0,0,0);">
    <div class="block-title van-hairline--bottom">签字板演示</div>
    <div class="block-body" style="padding: 0;">
      <signature-pad ref="signaturePad" downloadName="签名" style="border: 1px solid #ddd"></signature-pad>
      <button @click="getSignature">获取签名</button>
      <div>
        <img v-if="canvasDataURL" :src="canvasDataURL" style="width: 100px">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SignaturePad from './../../components/SignaturePad.vue'

let signaturePad = ref(null)
let canvasDataURL = ref('')

const getSignature = () => {
  console.log(signaturePad.value.getTrimmedCanvas())
  canvasDataURL.value = signaturePad.value.getTrimmedCanvas().toDataURL()
}
</script>

<style lang="less" scoped>
@import './../../styles/demo.less';
</style>