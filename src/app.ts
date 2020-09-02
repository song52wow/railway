import http from 'http'
import { getStationList } from './http/station'
import { getTrainList } from './http/train'
const settingJson = require('../setting.json')

http.createServer().listen('12345')

async function main () {
  // 获取站点列表信息, 每次重启服务器时才去拉取
  const stationJSON = await getStationList()

  // 获取列车列表
  getTrainList(stationJSON[settingJson.from], stationJSON[settingJson.to], settingJson.time)
}

main()
