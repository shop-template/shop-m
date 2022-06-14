<template>
  <div class="signature-pad">
    <canvas class="signature-pad-canvas" ref="signaturePadCanvas" style="touch-action: none; user-select: none;"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useEventListener } from '@vueuse/core'
import { Toast } from 'vant'
import SignaturePad from 'signature_pad'
import trimCanvas from 'trim-canvas'
import { download } from '@/utils'

const props = defineProps({
  downloadName: {
    type: String,
    default: 'signature'
  }
})

defineExpose({
  getCanvas,
  getTrimmedCanvas,
  getSignaturePad,
  clear: clearCanvas,
  isEmpty: isEmptyCanvas,
  changePenColoe,
  fromDataURL,
  toDataURL,
  fromData,
  toData,
  on: signaturePadOn,
  off: signaturePadOff,
  saveAsPng,
  saveAsJpg
})

const signaturePadCanvas = ref(null)
let signaturePad = null
onMounted(() => {
  nextTick(() => {
    signaturePad = new SignaturePad(signaturePadCanvas.value, {
      backgroundColor: 'rgba(255,255,255,0)'
    })
    resizeCanvas()
  })
})

function resizeCanvas() {
  const ratio =  Math.max(window.devicePixelRatio || 1, 1)
  signaturePadCanvas.value.width = signaturePadCanvas.value.offsetWidth * ratio
  signaturePadCanvas.value.height = signaturePadCanvas.value.offsetHeight * ratio
  signaturePadCanvas.value.getContext('2d').scale(ratio, ratio)
  signaturePad.clear()
}

useEventListener(window, 'resize', (evt) => { resizeCanvas() })

function getCanvas() {
  return signaturePadCanvas.value
}

function getTrimmedCanvas() {
  let copy = document.createElement('canvas')
  copy.width = signaturePadCanvas.value.width
  copy.height = signaturePadCanvas.value.height
  copy.getContext('2d').drawImage(signaturePadCanvas.value, 0, 0)
  return trimCanvas(copy)
}

function getSignaturePad() {
  return signaturePad
}

// 清空canvas
function clearCanvas() {
  signaturePad.clear()
}

// 判断canvas是否为空
function isEmptyCanvas() {
  return signaturePad.isEmpty()
}

// 更改画笔颜色
function changePenColoe(color) {
  signaturePad.penColor = color
}

function fromDataURL(dataURL, options) {
  return signaturePad.fromDataURL(dataURL, options)
}

function toDataURL(type, encoderOptions) {
  return signaturePad.toDataURL(type, encoderOptions)
}

function fromData(pointGroups) {
  return signaturePad.fromData(pointGroups)
}

function toData() {
  return signaturePad.toData()
}

function signaturePadOn() {
  return signaturePad.on()
}

function signaturePadOff() {
  return signaturePad.off()
}

// 保存为png图片
function saveAsPng(downloadName) {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
  } else {
    const dataURL = signaturePad.toDataURL()
    download(dataURL, `${downloadName || props.downloadName}.png`)
  }
}

function saveAsJpg(downloadName) {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
  } else {
    const dataURL = signaturePad.toDataURL('image/jpeg')
    download(dataURL, `${downloadName || props.downloadName}.jpg`)
  }
}
</script>

<style lang="less" scoped>
@import './../styles/common.less';
.signature-pad {
  background-color: #fff;
}
.signature-pad-canvas {
  height: 300px;
}
</style>