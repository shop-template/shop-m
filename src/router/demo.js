const demoLayout = () => import('../views/demo/demoLayout.vue')
const cssVar = () => import('../views/demo/cssVar.vue')
const tabbar = () => import('../views/demo/tabbar.vue')
const navBar = () => import('../views/demo/navBar.vue')
const network = () => import('../views/demo/network.vue')
const vconsole = () => import('../views/demo/vconsole.vue')
const signaturePad = () => import('../views/demo/signaturePad.vue')

export default [
  {
    path: '/demo',
    name: 'demoLayout',
    redirect: '/demo/navBar',
    component: demoLayout,
    meta: {
      requiresAuth: false
    },
    children: [
      {
        path: 'cssVar',
        name: 'cssVar',
        component: cssVar,
        meta: {
          requiresAuth: false,
          title: 'cssVar 配置主题颜色'
        }
      },
      {
        path: 'navBar',
        name: 'navBar',
        component: navBar,
        meta: {
          requiresAuth: false,
          title: 'navbar 使用演示'
        }
      },
      {
        path: 'tabbar',
        name: 'tabbar',
        component: tabbar,
        meta: {
          requiresAuth: false,
          title: 'tabbar 使用演示'
        }
      },
      {
        path: 'network',
        name: 'network',
        component: network,
        meta: {
          requiresAuth: false,
          title: 'network 无网样式'
        }
      },
      {
        path: 'vconsole',
        name: 'vconsole',
        component: vconsole,
        meta: {
          requiresAuth: false,
          title: 'vconsole 移动端控制台'
        }
      },
      {
        path: 'signaturePad',
        name: 'signaturePad',
        component: signaturePad,
        meta: {
          requiresAuth: false,
          title: '签字板'
        }
      },
    ]
  }
]