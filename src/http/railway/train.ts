
import { Station } from './station'
import { IRailWayConstructorParams } from '.'
import { logRes } from '../../tools/logs'
import { superAgentRepeat } from '../../tools/superAgent'

const station = require('../../data/station.json')

export class Train extends Station {
  private _obj: IRailWayConstructorParams

  constructor (obj: IRailWayConstructorParams) {
    super()
    this._obj = obj
  }

  async checkUser () {
    const data = await superAgentRepeat('post', this.apiList.checkUser)

    logRes('This user is valid', data)
  }

  /**
   * 获取列车列表
   */
  async getTrainList () {
    const query = {
      'leftTicketDTO.train_date': this._obj.time,
      'leftTicketDTO.from_station': station[this._obj.from],
      'leftTicketDTO.to_station': station[this._obj.to],
      purpose_codes: 'ADULT'
    }

    const data = await superAgentRepeat('get', this.apiList.trainList, query)

    logRes('Train list is successful obtained online', data)
  }
}
