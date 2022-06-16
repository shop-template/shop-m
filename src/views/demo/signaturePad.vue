<template>
  <div class="block" style="margin-left: 0;margin-right: 0;">
    <div class="block-title van-hairline--bottom">签字板简单演示</div>
    <div class="block-body" style="padding: 0;">
      <signature-pad></signature-pad>
    </div>
  </div>
  <div class="block" style="margin-left: 0;margin-right: 0;background: rgba(0,0,0,0)">
    <div class="block-title van-hairline--bottom" style="background: #fff;">签字板获取纯签名演示</div>
    <div class="block-body" style="padding: 0;">
      <signature-pad ref="signaturePad1" :isTrimCanvas="true" downloadName="签名"></signature-pad>
      <div class="pdt-small pdl-middle pdb-mini">
        <van-button type="success" @click="getIsEmpty1">画板是否为空</van-button>
        <van-button type="default" @click="clear1">清空画板</van-button>
        <van-button type="warning" @click="changeColor1">修改画笔颜色</van-button>
      </div>
      <div class="pdt-mini pdl-middle pdb-small">
        <van-button type="danger" @click="download1">下载签名（png）</van-button>
        <van-button type="primary" @click="getSignature1">获取纯签名</van-button>
      </div>
      <div class="pdl-middle">
        <div class="pdt-small pdb-small">纯签名：</div>
        <img v-if="canvasDataURL1" :src="canvasDataURL1" style="width: 100px">
      </div>
    </div>
  </div>
  <div class="block" style="margin-left: 0;margin-right: 0;background: rgba(0,0,0,0)">
    <div class="block-title van-hairline--bottom" style="background: #fff;">签字板演示</div>
    <div class="block-body" style="padding: 0;">
      <signature-pad ref="signaturePad2" :colors="colors" :isTrimCanvas="false" downloadName="签名2"></signature-pad>
      <div class="pdt-small pdl-middle pdb-mini">
        <van-button type="success" @click="getIsEmpty2">画板是否为空</van-button>
        <van-button type="default" @click="clear2">清空画板</van-button>
        <van-button type="warning" @click="changeColor2">修改画笔颜色</van-button>
      </div>
      <div class="pdt-mini pdl-middle pdb-small">
        <van-button type="danger" @click="download2">下载签名（jpg）</van-button>
        <van-button type="danger" @click="download2png">下载签名（png）</van-button>
      </div>
      <div class="pdt-mini pdl-middle pdb-small">
        <van-button type="primary" @click="getSignature2">获取签名</van-button>
      </div>
      <div class="pdl-middle">
        <div class="pdt-small pdb-small">签名：</div>
        <img v-if="canvasDataURL2" :src="canvasDataURL2" style="width: 100px">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Toast } from 'vant'
import SignaturePad from './../../components/SignaturePad.vue'

let signaturePad1 = ref(null)
let canvasDataURL1 = ref('')
let signaturePad2 = ref(null)
let canvasDataURL2 = ref('')
const colors = ['#000', '#aaa', '#f00', '#0f0', '#00f']

const getIsEmpty1 = () => {
  Toast(signaturePad1.value.isEmpty() ? '画板为空' : '画板不为空')
}

const clear1 = () => {
  signaturePad1.value.clear()
}

const changeColor1 = () => {
  signaturePad1.value.changePenColor(colors[(Math.random() * 1000).toFixed(0) * 1 % colors.length])
}

const download1 = () => {
  signaturePad1.value.saveAsPng('纯签名')
}

const getSignature1 = () => {
  const canvas = signaturePad1.value.getTrimmedCanvas()
  if (canvas) {
    canvasDataURL1.value = canvas.toDataURL()
  }
}

const getIsEmpty2 = () => {
  Toast(signaturePad2.value.isEmpty() ? '画板为空' : '画板不为空')
}

const clear2 = () => {
  signaturePad2.value.clear()
}

const changeColor2 = () => {
  signaturePad2.value.changePenColor(colors[(Math.random() * 1000).toFixed(0) * 1 % colors.length])
}

const download2 = () => {
  signaturePad2.value.saveAsJpg()
}
const download2png = () => {
  signaturePad2.value.saveAsPng('download2png')
}

const getSignature2 = () => {
  const canvas = signaturePad2.value.getSignaturePad()
  if (canvas) {
    canvasDataURL2.value = canvas.toDataURL()
  }
}
</script>

<style lang="less" scoped>
@import './../../styles/demo.less';
</style>