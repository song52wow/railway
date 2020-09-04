
import { promises } from 'fs'
import { RailWayApi } from '../../config'
import { logRes } from '../../tools/logs'
import superAgent from 'superagent'
/**
 * 站点
 */
export class Station extends RailWayApi {
  protected _station: {[key: string]: string}

  constructor () {
    super()

    this._station = {}
  }

  /**
   * 检测站点列表是否存在，否则请求获取
   */
  checkStationList () {
    return new Promise((resolve, reject) => {
      if (Object.values(this._station).length) return resolve()

      this.getStationList().then(resolve)
    })
  }

  /**
   * 网络请求获取站点信息
   */
  private async _httpGetStation () {
    const getStationText = await superAgent.get(this.apiList.stationList)

    logRes('Station info is successful obtained online', getStationText)

    // 列表数组，从第二个值开始有效
    const stationListArr = getStationText.text.split('@')

    // 列表转换为对象
    const stationObj = {} as { [key: string]: string }

    for (let i = 1, len = stationListArr.length, listArr = []; i < len; i++) {
      listArr = stationListArr[i].split('|')

      stationObj[listArr[1]] = listArr[2]
    }

    return stationObj
  }

  /**
   * 获取站点信息
   */
  async getStationList () {
    const filePath = 'src/data/station.json'

    try {
      const statJSON = await promises.readFile(filePath)

      this._station = JSON.parse(Buffer.from(statJSON).toString()) as { [key: string]: string }

      logRes('Station info is successful obtained from the cache')
    } catch (error) {
      const res = await this._httpGetStation()

      promises.writeFile(filePath, JSON.stringify(res))

      logRes('Station info is successful saved locally')

      this._station = res
    }
  }
}
