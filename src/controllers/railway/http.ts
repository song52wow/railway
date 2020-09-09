
import superAgent from 'superagent'

export class RailWayApi {
  private baseUrl: 'https://kyfw.12306.cn'

  private prefix: {
    passport: string
    otn: string
  }

 private apiList: {
    /** 二维码登录 */
    checkLoginQr: string
    /** 检查二维码状态 */
    checkQr: string
    /** 站点列表 */
    stationList: string;
    /** 列车班次 */
    trainList: string;
    /** 检查登录状态 */
    checkUser: string;
    /** 获取账户内身份信息 */
    getPassengerDTOs: string
    /** 获取重写的token */
    getRepeatToken: string
    submitOrderRequest: string
  };

 constructor () {
   this.baseUrl = 'https://kyfw.12306.cn'

   this.prefix = {
     passport: this.baseUrl + '/passport',
     otn: this.baseUrl + '/otn'
   }

   this.apiList = {
     checkLoginQr: this.prefix.passport + '/web/create-qr64',
     checkQr: this.prefix.passport + '/web/checkqr',
     stationList: this.prefix.otn + '/resources/js/framework/station_name.js',
     trainList: this.prefix.otn + '/leftTicket/query',
     checkUser: this.prefix.otn + '/login/checkUser',
     getRepeatToken: this.prefix.otn + '/confirmPassenger/initDc',
     getPassengerDTOs: this.prefix.otn + '/confirmPassenger/getPassengerDTOs',
     submitOrderRequest: this.prefix.otn + '/leftTicket/submitOrderRequest'
   }
 }

 loginQrApi () {
   return superAgent.post(this.apiList.checkLoginQr).type('form').send({ appid: 'otn' })
 }

 checkQrApi () {
   return superAgent.post(this.apiList.checkQr).type('form').send({ appid: 'otn' })
 }
}
