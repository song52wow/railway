// import http from 'http'
import { Railway } from './http/railway/index'
import { Station } from './http/railway/station'
const settingJson = require('../setting.json')

// http.createServer().listen('12345')

async function main () {
  const { from, to, time, tk } = settingJson

  await new Station().getStationList()

  // eslint-disable-next-line no-new
  new Railway({ from, to, time, tk })
}

main()
