/**
 * 字符串转为为unicode格式
 * @param str 字符串
 */
export function transUnicode (str: string) {
  const res = []

  for (let i = 0; i < str.length; i++) {
    res[i] = '\\u' + str.charCodeAt(i).toString(16)
  }

  return res.join('')
}
