import superAgent from 'superagent'
import { transUnicode } from './string'
import { Station } from '../http/railway/station'

const setting = require('../../setting.json')

class SuperAgentRepeat extends Station {
  private _userAgent: string

  constructor () {
    super()

    this._userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'

    this.checkStationList()
  }

  private _cookie () {
    const jcSaveFromStation = transUnicode(setting.from + ',') + this._station[setting.from]
    const jcSaveToStation = transUnicode(setting.to + ',') + this._station[setting.to]

    return `_uab_collina=159893253355515017452495; JSESSIONID=02803FC40D2F98AD9E55989A948A8B8C; BIGipServerotn=1658388746.24610.0000; RAIL_EXPIRATION=1599235400998; RAIL_DEVICEID=Ff7yWFEsJ6-dLsjuJmEaIKOnMsM3OOLnZZ5Sm0keEDowH2Wil_sb2mEtMZkFzCKpk3dRPXo4_E6cF5fQ1xs4gIeK66sHQUSa0d63e_fdvPevd6C9O3YcVBMDCYffZkdL1mzVMV3Dlb15wd0JcBYiorU7KXGX-WJ9; BIGipServerpassport=887619850.50215.0000; route=c5c62a339e7744272a54643b3be5bf64;  _jc_save_toDate=2020-09-01; _jc_save_wfdc_flag=dc; current_captcha_type=Z; uKey=ee6c8847203656a9e770b79198e59c813d0c900791d46c97cba566348fd6404d; _jc_save_fromDate=${setting.time}; _jc_save_fromStation=${jcSaveFromStation}; _jc_save_toStation=${jcSaveToStation}; tk=${setting.tk}`
  }

  get (api: string, query?: any) {
    return superAgent.get(api).query(query).set('Cookie', this._cookie()).set('User-Agent', this._userAgent)
  }

  post (api: string, params?: any) {
    return superAgent.post(api).send(params).set('Cookie', this._cookie()).set('User-Agent', this._userAgent)
  }
}

export const superAgentRepeat = new SuperAgentRepeat()
