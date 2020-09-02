export enum baseUrl {
  // 铁路
  railWay = 'https://kyfw.12306.cn/otn'
}

// 铁路API
export const railWayApi = {
  // 站点列表
  stationList: baseUrl.railWay + '/resources/js/framework/station_name.js',
  // 列车班次
  trainList: baseUrl.railWay + '/leftTicket/query'
}
