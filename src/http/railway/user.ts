import { RailWayApi } from '../../config'
import superAgent from 'superagent'
import { logRes } from '../../tools/logs'

export class User extends RailWayApi {
  async login () {
    const data = await superAgent.post(this.apiList.login).type('form').send({ appid: 'otn' })

    logRes('Get login QR code', data)
  }
}
