export const serverConfig = {
  port: 12306,
  hostname: '127.0.0.1'
}

export enum baseUrl {
  // 铁路
  // eslint-disable-next-line no-unused-vars
  railWay = 'https://kyfw.12306.cn'
}

export class RailWayApi {
  apiList: {
    /** 二维码登录 */
    login: string
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
    this.apiList = {
      login: baseUrl.railWay + '/passport/web/create-qr64',
      stationList: baseUrl.railWay + '/otn/resources/js/framework/station_name.js',
      trainList: baseUrl.railWay + '/otn/leftTicket/query',
      checkUser: baseUrl.railWay + '/otn/login/checkUser',
      getRepeatToken: baseUrl.railWay + '/otn/confirmPassenger/initDc',
      getPassengerDTOs: baseUrl.railWay + '/otn/confirmPassenger/getPassengerDTOs',
      submitOrderRequest: baseUrl.railWay + '/otn/leftTicket/submitOrderRequest'
    }
  }
}
