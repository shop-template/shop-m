<template>
  <div class="page">
    <div class="form-box">
      <van-form ref="changePasswordForm" @submit="onSubmit" label-width="7.2em">
        <van-cell-group>
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            required
            clearable
            center
            autocomplete="off"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请输入密码' }]"
          />
          <van-field
            v-model="passwordAgain"
            type="password"
            name="passwordAgain"
            label="再次输入密码"
            required
            clearable
            center
            autocomplete="off"
            placeholder="请输入再次输入密码"
            :rules="[{ required: true, message: '请输入再次输入密码' }, { validator: validatorFn, message: '两次密码输入不一致' }]"
            @focus="passwordAgainFocus"
          />
        </van-cell-group>
        <div class="form-button-box">
          <van-button round block type="primary" native-type="submit">修改密码</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Toast } from 'vant'

const router = useRouter()
const route = useRoute()

const password = ref('')
const passwordAgain = ref('')
const changePasswordForm = ref(null)

function passwordAgainFocus () {
  changePasswordForm.value.validate('password')
    .then(res => {
    })
    .catch(err => {
      console.log(err)
    })
}

function validatorFn () {
  return new Promise((resolve) => {
    changePasswordForm.value.validate('password')
      .then(res => {
        resolve(passwordAgain.value === password.value)
      })
      .catch(err => {
        console.log(err)
      })
  })
}

const onSubmit = (values) => {
  console.log('submit', values)
  const toast = Toast.loading({
    message: '加载中...'
  })
  setTimeout(() => {
    toast.clear()
    Toast.success('修改密码成功')
    router.go(-1)
  }, 1000)
}
</script>

<style lang="less" scoped>
@import './../../styles/login.less';
</style>