import { defineStore } from 'pinia'
import merge from 'lodash.merge'
import { validatorObject, validatorString } from '../utils'
import { useLayoutTabbar } from './layoutTabbar'

export const useLayoutNavbar = defineStore('layoutNavbar', {
  state: () => {
    return {
      show: true,
      navbarProps: {
        title: '',
        'left-text': '',
        'left-arrow': true,
        border: true,
        fixed: true,
        placeholder: true,
        'z-index': 100,
        'safe-area-inset-top': true
      },
      // 配置不显示 navbar 的 route.path
      dontShowList: []
    }
  },
  actions: {
    /**
     * 设置导航栏
     * @param {Object} object 
     */
    setNavbar(object) {
      if (validatorObject(object)) this.navbarProps = merge(this.navbarProps, object)
    },
    /**
     * 隐藏navbar
     */
    hideNavbar() {
      this.show = false
    },
    /**
     * 显示navbar
     */
    showNavbar() {
      this.show = true
    },
    /**
     * 为不显示 navbar 的列表中新添项
     * @param {String} path 
     */
    dontShowListAdd(path) {
      if (validatorString(path)) this.dontShowList.push(path)
    },
    /**
     * 为不显示 navbar 的列表中删除项
     * @param {String} path 
     */
    dontShowListRemove(path) {
      if (validatorString(path)) this.dontShowList.splice(this.dontShowList.findIndex(x => x === path), 1)
    },
    /**
     * 获取某个 path 是否显示 navbar
     * @param {String} path 
     * @returns 
     */
    getNavbarShow(path) {
      const layoutTabbar = useLayoutTabbar()
      let dontShowList = this.dontShowList.concat(layoutTabbar.tabbarToList)
      return !dontShowList.includes(path)
    }
  }
})