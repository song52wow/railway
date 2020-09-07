import { RailWayApi } from '../../config'
import superAgent from 'superagent'

const consolePng = require('console-png')

export class User extends RailWayApi {
  async login () {
    const data = await superAgent.post(this.apiList.login).type('form').send({ appid: 'otn' })

    console.log('data:image/jpg;base64,' + data.body.image)

    consolePng('data:image/jpg;base64,' + data.body.image, (err: any, str: string) => console.log(str))
  }
}
