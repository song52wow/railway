
import { Train } from './train'

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
  constructor (obj: IRailWayConstructorParams) {
    super(obj)
    this._init()
  }

  private async _init () {
    await this.getStationList()
    // await this.getTrainList()
  }
}
