<template>
  <div class="signature-pad">
    <canvas class="signature-pad-canvas" ref="signaturePadCanvas" style="touch-action: none; user-select: none;"></canvas>
  </div>
  <button @click="getSignature">获取签名</button>
  <div>
    <img v-if="canvasDataURL" :src="canvasDataURL" style="width: 100px">
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
// import { useEventListener } from '@vueuse/core'
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
  clear: clearCanvas,
  isEmpty: isEmptyCanvas,
  changePenColoe,
  saveAsPng,
  saveAsJpg
})

const canvasDataURL = ref('')
const signaturePadCanvas = ref(null)
let signaturePad
onMounted(() => {
  nextTick(() => {
    signaturePad = new SignaturePad(signaturePadCanvas.value, {
      backgroundColor: 'rgb(255, 255, 255)'
    })
    resizeCanvas()
  })
})

function resizeCanvas() {
  const ratio =  Math.max(window.devicePixelRatio || 1, 1)
  signaturePadCanvas.value.width = signaturePadCanvas.value.offsetWidth * ratio
  signaturePadCanvas.value.height = signaturePadCanvas.value.offsetHeight * ratio
  signaturePadCanvas.value.getContext("2d").scale(ratio, ratio)
  signaturePad.clear()
}

// useEventListener(window, 'resize', (evt) => { resizeCanvas() })

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
// 保存为png图片
function saveAsPng() {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
  } else {
    const dataURL = signaturePad.toDataURL()
    download(dataURL, `${props.downloadName}.png`)
  }
}
function saveAsJpg() {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
  } else {
    const dataURL = signaturePad.toDataURL("image/jpeg")
    download(dataURL, `${props.downloadName}.jpg`)
  }
}
function getSignature() {
  let copy = document.createElement('canvas')
  copy.width = signaturePadCanvas.value.width
  copy.height = signaturePadCanvas.value.height
  copy.getContext('2d').drawImage(signaturePadCanvas.value, 0, 0)
  canvasDataURL.value = trimCanvas(copy).toDataURL()
}
</script>

<style lang="less" scoped>
@import './../styles/common.less';
.signature-pad-canvas {
  width: 100%;
  height: 300px;
}
</style>