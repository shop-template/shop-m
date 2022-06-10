const UserPage = () => import('../views/user/UserPage.vue')
const UserInfoPage = () => import('../views/user/UserInfoPage.vue')
const ChangeNamePage = () => import('../views/user/ChangeNamePage.vue')
const ChangePasswordPage = () => import('../views/user/ChangePasswordPage.vue')
const AddressListPage = () => import('../views/user/AddressListPage.vue')
const AddressEditPage = () => import('../views/user/AddressEditPage.vue')

export default [
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
    path: '/addressList',
    name: 'addressList',
    component: AddressListPage,
    meta: {
      requiresAuth: true,
      title: '地址列表'
    }
  },
  {
    path: '/addressEdit',
    name: 'addressEdit',
    component: AddressEditPage,
    meta: {
      requiresAuth: true,
      title: '编辑地址'
    }
  }
]