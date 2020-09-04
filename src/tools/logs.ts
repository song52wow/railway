
/**
 * 日志
 * @param log 日志信息
 */
export function logRes (...log: any[]) {
  // return console.log(JSON.stringify({
  //   dt: new Date(),
  //   msg: log[0],
  //   data: log[1]
  // }))

  return console.log({
    dt: new Date(),
    msg: log[0],
    data: log[1]
  })
}

/**
 * 错误日志
 * @param log 日志信息
 */
export function logErr (...log: any[]) {
  return console.error(JSON.stringify({
    dt: new Date(),
    msg: log[0]
  }))
}
