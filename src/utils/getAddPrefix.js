/**
 * 获取项目前缀
 * @param {String} value 
 * @returns String
 */
 export function getAddPrefix(value){
  return `${import.meta.env.VITE_prefix}_${value}`
}