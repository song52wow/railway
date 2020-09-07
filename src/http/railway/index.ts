
import { Train } from './train'
import { logErr } from '../../tools/logs'

export interface IRailWayConstructorParams {
  from: string;
  to: string;
  time: string;
  tk: string
}

interface IRailWay {
  getStationList(): void;
}

export class Railway extends Train implements IRailWay {
  protected _station: { [key: string]: string}

  constructor (obj: IRailWayConstructorParams) {
    super(obj)
    this._init()

    this._station = {}
  }

  private async _init () {
    try {
      await this.login()

      // await Promise.all([
      //   this.getTrainList(),
      //   this.checkUser()
      // ])

      // // await this.submitOrderRequest()

      // await this.getRepeatToken()

      // await this.getUserPassport()
    } catch (error) {
      logErr(error.toString())
    }
  }
}
