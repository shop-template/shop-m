import { describe, beforeEach, it, expect, test } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useLayoutTabbar } from './../src/store'

describe('layoutTabbar Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('setTabBarItem', () => {
    const layoutTabbar = useLayoutTabbar()
    layoutTabbar.setTabBarItem({
      index: 0,
      detail: {
        icon: 'wap-home-o',
        title: 'home',
        dot: true
      }
    })
    const tabbarFirst = {
      name: 0,
      title: 'home',
      icon: 'wap-home-o',
      dot: true,
      badge: '',
      to: '/',
      replace: true
    }
    console.log(layoutTabbar.tabbar[0])
    expect(layoutTabbar.tabbar[0]).toEqual(tabbarFirst)
  })

  it('addTabbar', () => {
    const layoutTabbar = useLayoutTabbar()
    const addTabbarItem = {
      icon: 'bar-chart-o',
      title: '列表',
      to: '/list',
      badge: 10
    }
    layoutTabbar.addTabbar({
      index: 1,
      detail: addTabbarItem
    })
    console.log(layoutTabbar.tabbar)
    expect(layoutTabbar.tabbar[1]).toEqual(addTabbarItem)
  })

  it('removeTabbar', () => {
    const layoutTabbar = useLayoutTabbar()
    const addTabbarItem = {
      icon: 'bar-chart-o',
      title: '列表',
      to: '/list',
      badge: 10
    }
    layoutTabbar.addTabbar({
      index: 1,
      detail: addTabbarItem
    })
    console.log(layoutTabbar.tabbar.length)
    expect(layoutTabbar.tabbar).toHaveLength(6)
    layoutTabbar.removeTabbar(1)
    expect(layoutTabbar.tabbar[1]).not.toEqual(addTabbarItem)
    console.log(layoutTabbar.tabbar.length)
    expect(layoutTabbar.tabbar).toHaveLength(5)

    layoutTabbar.removeTabbar('/list')
    expect(layoutTabbar.tabbar[1]).not.toEqual({
      name: 1,
      title: '商品',
      icon: 'gift-o',
      dot: false,
      badge: '',
      to: '/list',
      replace: true
    })
    console.log(layoutTabbar.tabbar.length)
    expect(layoutTabbar.tabbar).toHaveLength(4)
  })

  it('hideTabbar', () => {
    const layoutTabbar = useLayoutTabbar()
    expect(layoutTabbar.show).toBe(true)
    layoutTabbar.hideTabbar()
    expect(layoutTabbar.show).toBe(false)
  })

  it('showTabbar', () => {
    const layoutTabbar = useLayoutTabbar()
    expect(layoutTabbar.show).toBe(true)
    layoutTabbar.hideTabbar()
    expect(layoutTabbar.show).toBe(false)
    layoutTabbar.showTabbar()
    expect(layoutTabbar.show).toBe(true)
  })
})