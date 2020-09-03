import { transUnicode } from '../../tools/string'
import { Station } from './station'
import superAgent from 'superagent'
import { IRailWayConstructorParams } from '.'
import { logRes } from '../../tools/logs'

export class Train extends Station {
  private _obj: IRailWayConstructorParams
  private _cookie: string
  private _userAgent: string

  constructor (obj: IRailWayConstructorParams) {
    super()
    this._obj = obj

    // Cookie
    const jcSaveFromStation = transUnicode(obj.from + ',') + this._station[obj.from]
    const jcSaveToStation = transUnicode(obj.to + ',') + this._station[obj.to]

    this._cookie = `_uab_collina=159893253355515017452495; JSESSIONID=02803FC40D2F98AD9E55989A948A8B8C; tk=g2wCgiN_nkRgwR8P87d_pb8n7OGhP8G5g-sEwZaqQSohuZ1Z0; BIGipServerotn=1658388746.24610.0000; RAIL_EXPIRATION=1599235400998; RAIL_DEVICEID=Ff7yWFEsJ6-dLsjuJmEaIKOnMsM3OOLnZZ5Sm0keEDowH2Wil_sb2mEtMZkFzCKpk3dRPXo4_E6cF5fQ1xs4gIeK66sHQUSa0d63e_fdvPevd6C9O3YcVBMDCYffZkdL1mzVMV3Dlb15wd0JcBYiorU7KXGX-WJ9; BIGipServerpassport=887619850.50215.0000; route=c5c62a339e7744272a54643b3be5bf64;  _jc_save_toDate=2020-09-01; _jc_save_wfdc_flag=dc; current_captcha_type=Z; uKey=ee6c8847203656a9e770b79198e59c813d0c900791d46c97cba566348fd6404d; _jc_save_fromDate=${obj.time}; _jc_save_fromStation=${jcSaveFromStation}; _jc_save_toStation=${jcSaveToStation}; tk=${obj.tk}`
    this._userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'

    this.init()
  }

  private async init () {
    // const [trainList, checkUser] = await Promise.all(this.getTrainList(), this._checkUser())

    // console.log(checkUser)

    this._checkUser()
  }

  private async _checkUser () {
    const data = await superAgent.post(this.apiList.checkUser).set('Cookie', this._cookie)

    logRes('This user is valid', data)
  }

  /**
   * 获取列车列表
   */
  async getTrainList () {
    const query = {
      'leftTicketDTO.train_date': this._obj.time,
      'leftTicketDTO.from_station': this._station[this._obj.from],
      'leftTicketDTO.to_station': this._station[this._obj.to],
      purpose_codes: 'ADULT'
    }

    const data = await superAgent
      .get(this.apiList.trainList)
      .query(query)
      .set('Cookie', this._cookie)
      .set('User-Agent', this._userAgent)

    logRes('Train list is successful obtained online', data)
  }
}
