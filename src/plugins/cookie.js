import { getAddPrefix, getType } from '@/utils'
import dayjs from 'dayjs'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

// https://www.npmjs.com/package/universal-cookie
export default {
  set(name, value, options) {
    // 对 options 中 expires 参数的简化使用，当设置为 Number 类型的时候，对应的几天，其他情况请自行传入 Date
    if (options && options.expires && getType(options.expires) === 'Number') {
      cookies.set(getAddPrefix(name), value, {
        ...options,
        expires: dayjs().add(7, 'day').toDate()
      })
    } else {
      cookies.set(getAddPrefix(name), value, options)
    }
  },
  get(name, options) {
    return cookies.get(getAddPrefix(name), options)
  },
  getAll(options) {
    return cookies.getAll(options)
  },
  remove(name, options) {
    cookies.remove(getAddPrefix(name), options)
  },
  cookiesInstance: cookies
}