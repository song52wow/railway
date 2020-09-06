
import { Station } from './station'
import { IRailWayConstructorParams } from '.'
import { logRes } from '../../tools/logs'
import { superAgentRepeat } from '../../tools/superAgent'

export class Train extends Station {
  private _obj: IRailWayConstructorParams
  private repeatToken: string

  constructor (obj: IRailWayConstructorParams) {
    super()
    this._obj = obj
    this.repeatToken = ''
  }

  async checkUser () {
    const data = await superAgentRepeat.post(this.apiList.checkUser).send({ _json_att: '' })

    logRes('This user is valid', data)
  }

  async submitOrderRequest () {
    const data = await superAgentRepeat.post(this.apiList.submitOrderRequest)
      .send({ secretStr: 'IOC7OLwl28zAjmMGNc+Sdfi7QpEGR7L/jDF5VQ3SFFRgPMuGBT0fmKpLs79MuipiHgEvpG+iAzygAvQHpQJWyVuE4HdZJT1vG+8x1RGS6ZuP4g0nwf2IBURMZDlF2nWRuxRUHouTHyykBMvX0RulylMyhJ3MCwmWjAsFJTAP4jpnmTKpDtZICVN0IwLeKcn1j9WMtuWAVSCa8xaTYrxeztPItWAbmxA5xppKd0tp1IQeGCYbRk9gzCjK888PRKcfRQ/HjkUGi4GV2estyJKNABta2FpHcwgbzb//D0ZdTe9s4tue' })
      .send({ train_date: '2020-09-14' })
      .send({ back_train_date: '2020-09-06' })
      .send({ tour_flag: 'dc' })
      .send({ purpose_codes: 'ADULT' })
      .send({ query_from_station_name: '深圳' })
      .send({ query_to_station_name: '长沙' })
      .send({ undefined: '' })

    logRes('Submit Order Request Successful', data)
  }

  /**
   * 获取重写的token
   */
  async getRepeatToken () {
    const data = await superAgentRepeat.post(this.apiList.getRepeatToken).send({ _json_att: '' })

    const token = data.text.match(/globalRepeatSubmitToken = '(.*)';/)

    if (token && token[1] !== 'null') {
      this.repeatToken = token[1]

      logRes('Get repeat submit token successful', this.repeatToken)
    } else {
      throw new Error('token已失效，请重新登录')
    }
  }

  /**
   * 获取账户内乘车人信息
   */
  async getUserPassport () {
    const data = await superAgentRepeat.post(this.apiList.getPassengerDTOs).send({ _json_att: '', REPEAT_SUBMIT_TOKEN: this.repeatToken })

    logRes('Get user passport successful', data)
  }

  /**
   * 获取列车列表
   */
  async getTrainList () {
    // 判断站点列表是否存在，不存在则先获取
    await this.checkStationList()

    const query = {
      'leftTicketDTO.train_date': this._obj.time,
      'leftTicketDTO.from_station': this._station[this._obj.from],
      'leftTicketDTO.to_station': this._station[this._obj.to],
      purpose_codes: 'ADULT'
    }

    const data = await superAgentRepeat.get(this.apiList.trainList, query)

    logRes('Train list is successful obtained online', data.text)
  }
}
