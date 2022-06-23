import axios from '@/plugins/axios.js'

export const apiLogin = (params = {}) => {
  return axios.post('/loginByPassword', params)
}
