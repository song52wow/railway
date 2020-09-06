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

    return `JSESSIONID=D964595B825DE894688CDFDE63935216; tk=${setting.tk}; RAIL_EXPIRATION=1599450690579; RAIL_DEVICEID=HxAZpjB6EE9_c6VYDoIpZ7y5RlM3ab0Ll_c5fmKfAKasJWak-6ooaQnecknA_EdQJhuDs4pfwxukOrJAGm06TLWD46L72HlCTTFwt0E1CGmN98m8SV7tstOOw5AoiB4Xfdnlc1sWXXg0KnCAUVIFHJ-oSangyx_e; _jc_save_toStation=${jcSaveToStation}; _jc_save_wfdc_flag=dc; _jc_save_fromStation=${jcSaveFromStation}; BIGipServerpassport=954728714.50215.0000; route=9036359bb8a8a461c164a04f8f50b252; BIGipServerotn=1926824202.24610.0000; current_captcha_type=Z; _jc_save_toDate=2020-09-06; _jc_save_fromDate=${setting.time}; uKey=ee6c8847203656a9e770b79198e59c8103f5f04d0a5ee065b2701e14f61a50fc`
  }

  get (api: string, query?: any) {
    return superAgent.get(api).query(query).set('Cookie', this._cookie()).set('User-Agent', this._userAgent)
  }

  post (api: string) {
    return superAgent.post(api).type('form').set('Cookie', this._cookie()).set('User-Agent', this._userAgent)
  }
}

export const superAgentRepeat = new SuperAgentRepeat()
