/**
 * 获取对象类型
 * @param {*} obj 
 * @returns Undefined/Null/String/Number/Array/Boolean/Object/Function/Math/Date
 */
export function getType(obj){
  return Object.prototype.toString.call(obj).slice(8, -1)
}
