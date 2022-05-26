import { getPrefix, getType } from '@/utils'
import dayjs from 'dayjs'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

// https://www.npmjs.com/package/universal-cookie
export default {
  set(name, value, options) {
    if (options && options.expires && getType(options.expires) === 'Number') {
      cookies.set(getPrefix(name), value, {
        ...options,
        expires: dayjs().add(7, 'day').toDate()
      })
    } else {
      cookies.set(getPrefix(name), value, options)
    }
  },
  get(name, options) {
    return cookies.get(getPrefix(name), options)
  },
  getAll(options) {
    return cookies.getAll(options)
  },
  remove(name, options) {
    cookies.remove(name, options)
  },
  cookiesInstance: cookies
}