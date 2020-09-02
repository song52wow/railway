import superAgent from 'superagent'
import { railWayApi } from '../config'

/**
 * 列车班次
 */
export async function getTrainList (from: string, to: string, time: string) {
  const query = {
    'leftTicketDTO.train_date': time,
    'leftTicketDTO.from_station': from,
    'leftTicketDTO.to_station': to,
    purpose_codes: 'ADULT'
  }

  const data = await superAgent
    .get(railWayApi.trainList)
    .query(query)
    .set('Cookie', '_uab_collina=159893253355515017452495; JSESSIONID=02803FC40D2F98AD9E55989A948A8B8C; tk=g2wCgiN_nkRgwR8P87d_pb8n7OGhP8G5g-sEwZaqQSohuZ1Z0; BIGipServerotn=1658388746.24610.0000; RAIL_EXPIRATION=1599235400998; RAIL_DEVICEID=Ff7yWFEsJ6-dLsjuJmEaIKOnMsM3OOLnZZ5Sm0keEDowH2Wil_sb2mEtMZkFzCKpk3dRPXo4_E6cF5fQ1xs4gIeK66sHQUSa0d63e_fdvPevd6C9O3YcVBMDCYffZkdL1mzVMV3Dlb15wd0JcBYiorU7KXGX-WJ9; BIGipServerpassport=887619850.50215.0000; route=c5c62a339e7744272a54643b3be5bf64; _jc_save_fromStation=%u5E7F%u5DDE%u5357%2CIZQ; _jc_save_toStation=%u987A%u5FB7%2CORQ; _jc_save_toDate=2020-09-01; _jc_save_wfdc_flag=dc; current_captcha_type=Z; uKey=ee6c8847203656a9e770b79198e59c813d0c900791d46c97cba566348fd6404d; _jc_save_fromDate=2020-09-30')
    .set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36')

  console.log(data.text)
}
