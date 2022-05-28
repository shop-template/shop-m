import cookie from '@/plugins/cookie'
import { useUserStore } from '@/store'

export default function (router) {
  router.beforeEach((to, from) => {
    if (to.meta.requiresAuth) {
      const token = cookie.get(import.meta.env.VITE_token)
      if (!token) {
        return { name: 'login', query: { from: to.name } }
      } else {
        const userStore = useUserStore()
        if (!userStore.isLogin) {
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