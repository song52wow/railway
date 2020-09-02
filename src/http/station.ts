import superagent from 'superagent'
import fs from 'fs'
import { railWayApi } from '../config'

const fsPromise = fs.promises

/**
 * 网络请求获取列表
 */
async function httpGetStation () {
  const getStationText = await superagent.get(railWayApi.stationList)

  // 列表数组，从第二个值开始有效
  const stationListArr = getStationText.text.split('@')

  // 列表转换为对象
  const stationObj = {} as {[key: string]: string}

  for (let i = 1, len = stationListArr.length, listArr = []; i < len; i++) {
    listArr = stationListArr[i].split('|')

    stationObj[listArr[1]] = listArr[2]
  }

  return stationObj
}

/**
 * 检测站点信息是否存在
 */
async function checkStationJSON () {
  const filePath = 'src/data/station.json'

  try {
    const statJSON = await fsPromise.readFile(filePath)

    return JSON.parse(Buffer.from(statJSON).toString()) as {[key:string]: string}
  } catch (error) {
    const res = await httpGetStation()

    fsPromise.writeFile(filePath, JSON.stringify(res))

    return res
  }
}

/**
 * 输出站点信息
 */
export function getStationList () {
  return checkStationJSON()
}
