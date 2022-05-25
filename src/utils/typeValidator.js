// 用于 layoutTabbar.js、layoutNavbar.js 等公共方法的参数验证
import { getType } from './getType'
import { Toast } from 'vant'

export function validatorFn(value, type) {
  if (getType(value) !== type) {
    Toast.fail('传入参数格式有误')
    console.error(`参数格式为 ${type} ，传入格式为 ${getType(value)}`)
    return false
  }
  return true
}

export function validatorObject(value) {
  return validatorFn(value, 'Object')
}

export function validatorDetailObject(value) {
  if (getType(value) !== 'Object') {
    Toast.fail('传入参数格式有误')
    console.error(`参数格式为 Object ，传入格式为 ${getType(value)}`)
    return false
  }
  if (!value.hasOwnProperty('index') || !value.hasOwnProperty('detail')) {
    Toast.fail('传入对象缺少参数')
    console.error(`传入对象需要 index 和 detail 属性`)
    return false
  }
  return true
}

export function validatorNumber(value) {
  return validatorFn(value, 'Number')
}

export function validatorString(value) {
  return validatorFn(value, 'String')
}