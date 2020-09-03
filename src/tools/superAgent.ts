import superAgent from 'superagent'
import { transUnicode } from './string'

export async function superAgentRepeat (method: 'get' | 'post', api: string, data?: any) {
  const setting = require('../../setting.json')
  const station = require('../data/station.json')

  const jcSaveFromStation = transUnicode(setting.from + ',') + station[setting.from]
  const jcSaveToStation = transUnicode(setting.to + ',') + station[setting.to]

  const cookie = `_uab_collina=159893253355515017452495; JSESSIONID=02803FC40D2F98AD9E55989A948A8B8C; tk=g2wCgiN_nkRgwR8P87d_pb8n7OGhP8G5g-sEwZaqQSohuZ1Z0; BIGipServerotn=1658388746.24610.0000; RAIL_EXPIRATION=1599235400998; RAIL_DEVICEID=Ff7yWFEsJ6-dLsjuJmEaIKOnMsM3OOLnZZ5Sm0keEDowH2Wil_sb2mEtMZkFzCKpk3dRPXo4_E6cF5fQ1xs4gIeK66sHQUSa0d63e_fdvPevd6C9O3YcVBMDCYffZkdL1mzVMV3Dlb15wd0JcBYiorU7KXGX-WJ9; BIGipServerpassport=887619850.50215.0000; route=c5c62a339e7744272a54643b3be5bf64;  _jc_save_toDate=2020-09-01; _jc_save_wfdc_flag=dc; current_captcha_type=Z; uKey=ee6c8847203656a9e770b79198e59c813d0c900791d46c97cba566348fd6404d; _jc_save_fromDate=${setting.time}; _jc_save_fromStation=${jcSaveFromStation}; _jc_save_toStation=${jcSaveToStation}; tk=${setting.tk}`
  const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
  let http!: superAgent.SuperAgentRequest

  if (data) {
    if (method === 'get') {
      http = superAgent[method](api).query(data)
    }

    if (method === 'post') {
      http = superAgent[method](api).send(data)
    }
  } else {
    http = superAgent[method](api)
  }

  return http.set('Cookie', cookie).set('User-Agent', userAgent)
}
