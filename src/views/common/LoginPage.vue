<template>
  <div class="page">
    <div class="tabs-box">
      <van-tabs v-model:active="tabActive">
        <van-tab v-for="item in tabList" :key="item.value" :title="item.label" :name="item.value"></van-tab>
      </van-tabs>
    </div>
    <div class="form-box">
      <van-form ref="logoForm" @submit="onSubmit">
        <van-cell-group v-if="tabActive === 0">
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            required
            clearable
            center
            autocomplete="username"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '请输入用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            required
            clearable
            center
            autocomplete="current-password"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请输入密码' }]"
          />
        </van-cell-group>
        <van-cell-group v-else>
          <van-field
            v-model="phone"
            name="phone"
            label="手机号"
            required
            clearable
            center
            autocomplete="tel"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请输入手机号' }, { pattern: phonePattern, message: '手机号格式有误' }]"
          />
          <van-field
            v-model="sms"
            name="sms"
            label="短信验证码"
            required
            clearable
            center
            autocomplete="off"
            placeholder="请输入短信验证码"
            :rules="[{ required: true, message: '请输入短信验证码' }, { pattern: smsPattern, message: '短信验证码格式有误' }]"
          >
            <template #button>
              <van-button v-if="smsBtnShow" size="small" type="primary" @click="sendSmsEvent">发送验证码</van-button>
              <div v-else>{{ countDown.current.value.seconds }}秒</div>
            </template>
          </van-field>
        </van-cell-group>
        <div class="form-button-box">
          <van-button round block type="primary" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <div class="display-flex-between mg-small">
      <div class="button-text">注册</div>
      <div class="button-text">忘记密码</div>
    </div>
    <div class="page-footer">
      <div class="page-footer-wrap van-safe-area-bottom">
        <van-checkbox v-model="userAgreement">用户协议</van-checkbox>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Toast } from 'vant'
import { useCountDown } from '@vant/use'
import { phonePattern, smsPattern } from '@/utils/formPattern.js'

const tabList = [
  { label: '密码登录', value: 0 },
  { label: '验证码登录', value: 1 }
]
const tabActive = ref(tabList[0].value)

const logoForm = ref(null)
// 密码
const username = ref('')
const password = ref('')
// 验证码
const phone = ref('')
const sms = ref('')

const userAgreement = ref(false)
const smsBtnShow = ref(true)

// 倒计时
const countDown = useCountDown({
  // 1 分钟
  time: 60 * 1000,
  onFinish: () => {
    smsBtnShow.value = true
    countDown.reset()
  }
})
// 发送验证码
function sendSmsEvent () {
  logoForm.value.validate('phone')
    .then(res => {
      smsBtnShow.value = false
      countDown.start()
    })
    .catch(err => {
      console.log(err)
    })
}

const onSubmit = (values) => {
  console.log('submit', values)
  if (!userAgreement.value) {
    Toast.fail('请阅读并勾选用户协议')
  }
}
</script>

<style lang="less" scoped>
@import './../../styles/login.less';
</style>