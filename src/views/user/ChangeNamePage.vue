<template>
  <div class="page">
    <div class="form-box">
      <van-form ref="changeNameForm" @submit="onSubmit">
        <van-cell-group>
          <van-field
            v-model="userName"
            name="name"
            label="名称"
            required
            clearable
            center
            autocomplete="name"
            placeholder="请输入名称"
            :rules="[{ required: true, message: '请输入名称' }]"
          />
        </van-cell-group>
        <div class="form-button-box">
          <van-button round block type="primary" native-type="submit">修改名称</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Toast } from 'vant'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const userName = ref('')

watch(
  () => userInfo.value,
  (val) => {
    userName.value = val.name
  },
  {
    immediate: true
  }
)

const onSubmit = (values) => {
  console.log('submit', values)
  const toast = Toast.loading({
    message: '加载中...'
  })
  setTimeout(() => {
    toast.clear()
    Toast.success('修改名称成功')
    userStore.userInfo.name = values.name
    router.go(-1)
  }, 1000)
}
</script>

<style lang="less" scoped>
@import './../../styles/login.less';
</style>