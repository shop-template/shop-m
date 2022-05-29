import cookie from '@/plugins/cookie'
import { useUserStore } from '@/store'

export default function (router) {
  router.beforeEach((to, from) => {
    if (to.meta.requiresAuth) {
      // 需要身份验证
      const token = cookie.get(import.meta.env.VITE_token)
      if (!token) {
        // 本地 token 不存在，则跳转到登录页
        return { name: 'login', query: { from: to.name } }
      } else {
        const userStore = useUserStore()
        if (!userStore.isLogin) {
          // 未登录时，先获取用户信息，再跳转
          userStore.getUserInfoFn().then(res => {
            return true
          })
        } else {
          return true
        }
      }
    } else {
      return true
    }
  })
}