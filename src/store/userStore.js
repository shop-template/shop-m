import { defineStore } from 'pinia'
import { Toast } from 'vant'
import cookie from '@/plugins/cookie'
import { apiLogin } from '@/api'

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
    async loginInFn(params) {
      if (params.tabActive === 0) {
        const toast = Toast.loading({
          message: '加载中...'
        })
        const res = await apiLogin(params)
        toast.clear()
        cookie.set(import.meta.env.VITE_token, res.data.data.token, { path: '/', expires: 7 })
        this.$patch((state) => {
          state.userInfo = res.data.data.userInfo
        })
      } else {
        const toast = Toast.loading({
          message: '加载中...'
        })
        console.log('loginInFn')
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            toast.clear()
            cookie.set(import.meta.env.VITE_token, this.demoCookie, { path: '/', expires: 7 })
            this.$patch((state) => {
              state.userInfo = state.demoUserInfo
            })
            resolve(this.demoUserInfo)
          }, 1000)
        })
      }
    },
    async loginOutFn() {
      const toast = Toast.loading({
        message: '加载中...'
      })
      console.log('loginOutFn')
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          toast.clear()
          cookie.remove(import.meta.env.VITE_token, { path: '/' })
          this.$patch((state) => {
            state.userInfo = {}
          })
          console.log('userInfo', this.userInfo)
          resolve()
        }, 1000)
      })
    },
    async getUserInfoFn() {
      const toast = Toast.loading({
        message: '加载中...'
      })
      console.log('getUserInfoFn')
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          toast.clear()
          this.$patch((state) => {
            state.userInfo = state.demoUserInfo
          })
          resolve()
        }, 1000)
      })
    }
  }
})