import { describe, beforeEach, it, expect, test } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useLayoutNavbar } from './../src/store'

describe('layoutNavbar Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('setNavbar', () => {
    const layoutNavbar = useLayoutNavbar()
    layoutNavbar.setNavbar({
      title: '标题',
      'left-text': '返回'
    })
    const navbarProps = {
      title: '标题',
      'left-text': '返回',
      'left-arrow': true,
      border: true,
      fixed: true,
      placeholder: true,
      'z-index': 100,
      'safe-area-inset-top': true
    }
    console.log(layoutNavbar.navbarProps)
    expect(layoutNavbar.navbarProps).toEqual(navbarProps)
  })

  it('hideNavbar', () => {
    const layoutNavbar = useLayoutNavbar()
    expect(layoutNavbar.show).toBe(true)
    layoutNavbar.hideNavbar()
    expect(layoutNavbar.show).toBe(false)
  })

  it('showNavbar', () => {
    const layoutNavbar = useLayoutNavbar()
    expect(layoutNavbar.show).toBe(true)
    layoutNavbar.hideNavbar()
    expect(layoutNavbar.show).toBe(false)
    layoutNavbar.showNavbar()
    expect(layoutNavbar.show).toBe(true)
  })

  it('dontShowListAdd and dontShowListRemove', () => {
    const layoutNavbar = useLayoutNavbar()
    layoutNavbar.dontShowListAdd('/demo/navBar')
    console.log('dontShowListAdd -> layoutNavbar.dontShowList', layoutNavbar.dontShowList)
    expect(layoutNavbar.dontShowList).toContain('/demo/navBar')
    
    layoutNavbar.dontShowListRemove('/demo/navBar')
    console.log('dontShowListRemove -> layoutNavbar.dontShowList', layoutNavbar.dontShowList)
    expect(layoutNavbar.dontShowList).not.toContain('/demo/navBar')
  })

  it('getNavbarShow', () => {
    const layoutNavbar = useLayoutNavbar()
    layoutNavbar.dontShowListAdd('/demo/navBar')
    console.log('dontShowListAdd -> layoutNavbar.dontShowList', layoutNavbar.dontShowList)
    expect(layoutNavbar.dontShowList).toContain('/demo/navBar')

    console.log(`layoutNavbar.getNavbarShow('/demo/navBar')`, layoutNavbar.getNavbarShow('/demo/navBar'))
    expect(layoutNavbar.getNavbarShow('/demo/navBar')).toBeFalsy()

    console.log(`layoutNavbar.getNavbarShow('/demo/nav')`, layoutNavbar.getNavbarShow('/demo/nav'))
    expect(layoutNavbar.getNavbarShow('/demo/nav')).toBeTruthy()
  })
})
