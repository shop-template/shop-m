import { createRouter, createWebHashHistory } from 'vue-router'
import permission from './permission'
import demoRouters from './demo'

const HomePage = () => import('../views/home/HomePage.vue')
const ListPage = () => import('../views/list/ListPage.vue')
const ShoppingCartPage = () => import('../views/ShoppingCart/ShoppingCartPage.vue')
const UserPage = () => import('../views/user/UserPage.vue')
const NotFoundPage = () => import('../views/common/NotFoundPage.vue')
const LoginPage = () => import('../views/common/LoginPage.vue')
const RegisterPage = () => import('../views/common/RegisterPage.vue')
const ForgetPage = () => import('../views/common/ForgetPage.vue')
const UserInfoPage = () => import('../views/user/UserInfoPage.vue')
const ChangeNamePage = () => import('../views/user/ChangeNamePage.vue')
const ChangePasswordPage = () => import('../views/user/ChangePasswordPage.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...demoRouters,
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
      path: '/shoppingCart',
      name: 'shoppingCart',
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
      path: '/userInfo',
      name: 'userInfo',
      component: UserInfoPage,
      meta: {
        requiresAuth: true,
        title: '个人信息'
      }
    },
    {
      path: '/changeName',
      name: 'changeName',
      component: ChangeNamePage,
      meta: {
        requiresAuth: true,
        title: '修改名称'
      }
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: ChangePasswordPage,
      meta: {
        requiresAuth: true,
        title: '修改密码'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        requiresAuth: false,
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      meta: {
        requiresAuth: false,
        title: '注册'
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: ForgetPage,
      meta: {
        requiresAuth: false,
        title: '忘记密码'
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

permission(router)

export default router
