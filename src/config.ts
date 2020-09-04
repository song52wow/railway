export enum baseUrl {
  // 铁路
  // eslint-disable-next-line no-unused-vars
  railWay = 'https://kyfw.12306.cn/otn'
}

export class RailWayApi {
  apiList: {
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
      stationList: baseUrl.railWay + '/resources/js/framework/station_name.js',
      trainList: baseUrl.railWay + '/leftTicket/query',
      checkUser: baseUrl.railWay + '/login/checkUser',
      getRepeatToken: baseUrl.railWay + '/confirmPassenger/initDc',
      getPassengerDTOs: baseUrl.railWay + '/confirmPassenger/getPassengerDTOs',

      submitOrderRequest: baseUrl.railWay + '/leftTicket/submitOrderRequest'
    }
  }
}
