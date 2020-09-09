import { RailWayApi } from './http'
import { logRes } from '../../tools/logs'

/**
 * 0: 二维码状态查询成功
 * 3: 二维码已过期
 */
type checkQrResultCode = '0' | '3';

export class User extends RailWayApi {
  private uuid: string
  private timer: any

  constructor () {
    super()
    this.uuid = ''
    this.timer = null
  }

  /**
   * 生成登录二维码
   */
  async createLoginQr () {
    const data = ((await super.loginQrApi()) as unknown) as {
      image: string;
      'result_code': string;
      'result_message': string;
      uuid: string;
    }

    logRes('Get login QR code', data)

    this.uuid = data.uuid

    this.checkLoginStatus()

    return data
  }

  /**
   * 检查登录状态
   */
  checkLoginStatus () {
    this.timer = setTimeout(async () => {
      const data = (await super.checkQrApi().send({ uuid: this.uuid })) as unknown as {
      'result_code': checkQrResultCode;
      'result_message': string;
    }

      logRes('Check qr status', data)

      if (data.result_code === '0') return this.checkLoginStatus()

      return data
    }, 1000)
  }
}
