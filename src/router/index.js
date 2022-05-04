import { createRouter, createWebHashHistory } from 'vue-router'
import { useLayoutNavbar } from './../store'

const HomePage = () => import('../views/home/HomePage.vue')
const ListPage = () => import('../views/list/ListPage.vue')
const ShoppingCartPage = () => import('../views/ShoppingCart/ShoppingCartPage.vue')
const UserPage = () => import('../views/user/UserPage.vue')
const NotFoundPage = () => import('../views/common/NotFoundPage.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        requiresAuth: false,
        title: '首页'
      }
    },
    {
      path: '/list',
      name: 'list',
      component: ListPage,
      meta: {
        requiresAuth: false,
        title: '列表'
      }
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: ShoppingCartPage,
      meta: {
        requiresAuth: true,
        title: '购物车'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage,
      meta: {
        requiresAuth: false,
        title: '我的'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
      meta: {
        requiresAuth: false,
        title: '404'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from) => {
  document.title = to.meta.title
  const layoutNavbar = useLayoutNavbar()
  layoutNavbar.navbarProps.title = to.meta.title
  return true
})

export default router
