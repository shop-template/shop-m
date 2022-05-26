import { defineStore } from 'pinia'
import cookie from '@/plugins/cookie'
import { Toast } from 'vant'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: {},
      demoCookie: 'shop-mabcdefg',
      demoUserInfo: {
        id: 6,
        name: 'fxss',
        account: '182****9555',
        headerImg: 'https://img.fxss.work/header-1583418772000-23-production'
      }
    }
  },
  getters: {
    isLogin() {
      return JSON.stringify(this.userInfo) !== '{}'
    }
  },
  actions: {
    async loginInFn() {
      const toast = Toast.loading({
        message: '加载中...'
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          toast.clear()
          cookie.set('token', this.demoCookie, { path: '/', expires: 7 })
          this.$patch({
            userInfo: this.demoUserInfo
          })
          resolve(this.demoUserInfo)
        }, 2000)
      })
    },
    async loginOutFn() {
      const toast = Toast.loading({
        message: '加载中...'
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          toast.clear()
          cookie.remove('token', { path: '/' })
          this.$patch({
            userInfo: {}
          })
          resolve()
        }, 2000)
      })
    },
    async getUserInfoFn() {
      const toast = Toast.loading({
        message: '加载中...'
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          toast.clear()
          this.$patch({
            userInfo: this.demoUserInfo
          })
          resolve()
        }, 2000)
      })
    }
  }
})