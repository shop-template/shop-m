/**
 * 获取项目前缀
 * @param {String} value 
 * @returns String
 */
 export function getPrefix(value){
  return `${import.meta.env.VITE_prefix}_${value}`
}