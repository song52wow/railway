import superAgent from 'superagent'
import { transUnicode } from './string'
import { Station } from '../http/railway/station'

const setting = require('../../setting.json')

class SuperAgentRepeat extends Station {
  private _userAgent: string
  // Cookie
  private _JSESSIONID: string

  constructor () {
    super()

    this._userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'

    this.checkStationList()

    this._JSESSIONID = ''
  }

  get JSESSIONID () {
    return this._JSESSIONID
  }

  set JSESSIONID (val) {
    this._JSESSIONID = val
  }

  private _cookie () {
    const jcSaveFromStation = transUnicode(setting.from + ',') + this._station[setting.from]

    const jcSaveToStation = transUnicode(setting.to + ',') + this._station[setting.to]

    const uabCollina = '159944775095334657292773'

    const RAIL_DEVICEID = 'kYJO9LCmaJaQQvT_oEwoWYpYrKYfLPsfjr5ZvAvm0vU0mCiorZAdS8mYCbLGfnIyNagZK6hH35w0T-Go77U5M3ip8hUrPEQq86HsA1UMCgsJG56_hx5fro9opsOu_RgnUOWRbCqLifMuAttQvlGWKggy5sr3powI'

    const route = '6f50b51faa11b987e576cdb301e545c4'

    const uKey = 'ee6c8847203656a9e770b79198e59c8160da507fb8e555da10dc238f6e004746'

    return `_uab_collina=${uabCollina}; tk=${setting.tk}; JSESSIONID=${this.JSESSIONID}; BIGipServerotn=2564227338.64545.0000; BIGipServerpassport=803733770.50215.0000; RAIL_EXPIRATION=1599487821366; RAIL_DEVICEID=${RAIL_DEVICEID}; route=${route}; current_captcha_type=Z; _jc_save_fromStation=${jcSaveFromStation}; _jc_save_toStation=${jcSaveToStation}; _jc_save_wfdc_flag=dc; _jc_save_toDate=2020-09-07; _jc_save_fromDate=${setting.time}; uKey=${uKey}`
  }

  get (api: string, query?: any) {
    return superAgent.get(api).query(query).set('Cookie', this._cookie()).set('User-Agent', this._userAgent)
  }

  post (api: string) {
    return superAgent.post(api).type('form').set('Cookie', this._cookie()).set('User-Agent', this._userAgent)
  }
}

export const superAgentRepeat = new SuperAgentRepeat()
