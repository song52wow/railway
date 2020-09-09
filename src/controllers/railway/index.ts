import { User } from './user'
import { ServerResponse } from 'http'

export default async (ctx: {res: ServerResponse}) => {
  const user = new User()

  const userData = await user.createLoginQr()

  const resUserData = {
    data: {
      qrCode: userData.image
    }
  }

  ctx.res.end(JSON.stringify(resUserData))
}
