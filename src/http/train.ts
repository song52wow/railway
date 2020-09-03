// import superAgent from 'superagent'
// // import { railWayApi } from '../config'
// import { transUnicode } from '../tools/string'

// /**
//  * 列车班次
//  */
// export async function getTrainList (
//   stationJSON: { [key: string]: string },
//   obj: { from: string; to: string; time: string }
// ) {
//   const query = {
//     'leftTicketDTO.train_date': obj.time,
//     'leftTicketDTO.from_station': stationJSON[obj.from],
//     'leftTicketDTO.to_station': stationJSON[obj.to],
//     purpose_codes: 'ADULT'
//   }

//   // Cookie
//   const jcSaveFromStation = transUnicode(obj.from + ',') + stationJSON[obj.from]
//   const jcSaveToStation = transUnicode(obj.to + ',') + stationJSON[obj.to]

//   const data = await superAgent
//     .get(railWayApi.trainList)
//     .query(query)
//     .set(
//       'Cookie',
//       `_uab_collina=159893253355515017452495; JSESSIONID=02803FC40D2F98AD9E55989A948A8B8C; tk=g2wCgiN_nkRgwR8P87d_pb8n7OGhP8G5g-sEwZaqQSohuZ1Z0; BIGipServerotn=1658388746.24610.0000; RAIL_EXPIRATION=1599235400998; RAIL_DEVICEID=Ff7yWFEsJ6-dLsjuJmEaIKOnMsM3OOLnZZ5Sm0keEDowH2Wil_sb2mEtMZkFzCKpk3dRPXo4_E6cF5fQ1xs4gIeK66sHQUSa0d63e_fdvPevd6C9O3YcVBMDCYffZkdL1mzVMV3Dlb15wd0JcBYiorU7KXGX-WJ9; BIGipServerpassport=887619850.50215.0000; route=c5c62a339e7744272a54643b3be5bf64; _jc_save_fromStation=${jcSaveFromStation}; _jc_save_toStation=${jcSaveToStation}; _jc_save_toDate=2020-09-01; _jc_save_wfdc_flag=dc; current_captcha_type=Z; uKey=ee6c8847203656a9e770b79198e59c813d0c900791d46c97cba566348fd6404d; _jc_save_fromDate=${obj.time}`
//     )
//     .set(
//       'User-Agent',
//       'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
//     )

//   console.log(JSON.parse(data.text))
// }

// // '_uab_collina=159893253355515017452495; JSESSIONID=24603DCE73B10F1793E8A035281ACAD8; tk=QDAJHhlbZTOzO8GLLMvUt0SvtobYp0oYRekQGfWC2Ks73Z1Z0; BIGipServerotn=1658388746.24610.0000; RAIL_EXPIRATION=1599235400998; RAIL_DEVICEID=Ff7yWFEsJ6-dLsjuJmEaIKOnMsM3OOLnZZ5Sm0keEDowH2Wil_sb2mEtMZkFzCKpk3dRPXo4_E6cF5fQ1xs4gIeK66sHQUSa0d63e_fdvPevd6C9O3YcVBMDCYffZkdL1mzVMV3Dlb15wd0JcBYiorU7KXGX-WJ9; BIGipServerpassport=887619850.50215.0000; route=c5c62a339e7744272a54643b3be5bf64; _jc_save_fromStation=%u5E7F%u5DDE%u5357%2CIZQ; _jc_save_toStation=%u987A%u5FB7%2CORQ; _jc_save_wfdc_flag=dc; current_captcha_type=Z; _jc_save_showIns=true; _jc_save_toDate=2020-09-03; _jc_save_fromDate=2020-09-03'

// // `PGbVObOBYtR1jwiIn5f1Yc8rK7WVpzOoncPw7SZ1LDwY5EGn%2B0jv6igsszuWr32Gr4ENiXRFrKfK%0A3wQ1V4zgn2Nu60TS2njB0ARbkRpoc4uSIzclgjIotNPeKEU300%2B2yg7gsMDuA147QoXWuTnXmrC6%0A%2B5Y6F3FlL%2FJaWziMkkrehgGl63%2FcFSF88p%2BjF6RdnXeZHXnvplMdTQJbis8XcciWrvW%2Fq0Pz%2B9Gu%0A5k1bGNAWsa5xr1IGjD35A8cbcl6%2B9rruizy10tdUH9f%2BXYJd%2BbwBZW2AAvI7
// // |预订
// // |6c000C769107
// // |C7691
// // |IZQ
// // |ZHQ
// // |IZQ
// // |ORQ
// // |22:34
// // |22:42
// // |00:08
// // |Y
// // |niSSg7Zleu33Q07pxUkcKyTlhiec%2BN7A
// // |20200903
// // |3
// // |Q6
// // |01
// // |02
// // |1
// // |0
// // |||||||有||||有||||O0W0|OO|0|0||O001000021O001003442||||||1|`

// // `TcxGUTVlDWPeh1EHnZnga1BD2hIux%2Bm1W0W8jp4oqovs0abeEZoW70rSbUlIHFT1FrhDhB0omPDO%0AVRlDAnuxjSLW85CaShJcODbTnOcisyz7Z9EnU5XrJQGAz81gA9cCOG2PcTfSoALl6gjdYAHkd59U%0AW2OATMVoQ7yyB8fzHu6uhwg74%2BduXitcwEzh%2FQSQf8nzTtfzKeGxIXvLQKYgYBI%2Fh3oX99Oep%2Fsx%0A%2B%2F8o394wNFWuIGgitynXOHfkPYuGdt76tpd0WTRMzMLQ2VPhrAUcpytYJnZMoKfI4Al9pHg%3D
// // |预订
// // |6i00000G720H
// // |G72
// // |NZQ
// // |BXP
// // |NZQ
// // |CWQ
// // |07:02
// // |10:31
// // |03:29
// // |N
// // |264AUlGEwf4LDY%2FXYIUSuvteC8ZeToR1ibCo09FSkhT3obPz
// // |20200921
// // |3
// // |Q6
// // |01
// // |06
// // |1
// // |0|||||||||||无|无|无||O0M090|OM9|0|1||O039700000M0612000009121000000||||||1|``Iyc2RjtEjEWppfhIfBagyvdgRMb2U7YTIcL9RYFLuvd4PM12o25ssVsNwTErwtTn9hG3IliMd8HE%0AglS4w6Mst%2BU1VstInvF7OlVFsl0mLHtmbTueE85FybV%2Ft7Cce0cYn3c8y8Wv%2Bqb%2B3zGqC%2Becay3G%0A3VeLkW1pshsb4OGJSCXrSa6Xy0YrzIREpAq%2BVlNb5F9PMVjw3645p3R%2Bv2CegpWRx8OLPqvQwJQC%0ATNGTz1jboUMNOwN%2BeA%2BKEvnPqklqLM2bkc2aYCLpX%2BbvQmPcczcQRrXNQYgGZb0vyZOi9pQp%2BR16%0A
// // |预订
// // |6i000G60120G
// // |G6012
// // |IOQ
// // |CWQ
// // |IOQ
// // |CWQ
// // |07:08
// // |10:35
// // |03:27
// // |Y
// // |ausgaRJ30o%2FBfRPEq3zfSGIcuzMzifTxjpeXIBKa%2FweJ8lmh
// // |20200921
// // |3
// // |Q9
// // |01
// // |07
// // |1
// // |0|||||||||||有|有|13||O0M090|OM9|0|0||O038850021M0603500219119450013||||||1|`

// export async function getPassengerInfo () {

// }
