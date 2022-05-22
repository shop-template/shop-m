<template>
  <div class="block">
    <div class="block-body">
      <van-button size="small" type="primary" @click="addVconsoleEvent">添加vconsole</van-button>
      <van-button size="small" type="primary" @click="destroyVconsoleEvent">销毁vconsole</van-button>
    </div>
  </div>
</template>

<script setup>
import VConsole from 'vconsole'

let vConsole

function addVconsoleEvent () {
  vConsole = new VConsole()
}

function destroyVconsoleEvent () {
  if (!vConsole) {
    vConsole = new VConsole()
  }
  vConsole.destroy()
}
</script>

<style lang="less" scoped>
@import './../../styles/demo.less';
</style>
