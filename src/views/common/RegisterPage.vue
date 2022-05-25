<template>
  <div class="page">
    <div class="form-box">
      <van-form ref="logoForm" @submit="onSubmit">
        <van-cell-group>
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
          <van-button round block type="primary" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
    <div class="display-flex-between mg-small">
      <div class="button-text">登录</div>
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

const logoForm = ref(null)

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
  console.log(userAgreement.value)
  if (!userAgreement.value) {
    Toast.fail('请阅读并勾选用户协议')
  }
}
</script>

<style lang="less" scoped>
@import './../../styles/login.less';
</style>