import http from 'http'
// import { Railway } from './http/railway/index'
import { logRes } from './tools/logs'
import { serverConfig } from './config'
import { distribution } from './controllers'
// const settingJson = require('../setting.json')

async function main () {
  // const { from, to, time, tk } = settingJson

  // eslint-disable-next-line no-new
  // new Railway({ from, to, time, tk })

  http
    .createServer(async (req, res) => {
      if (req.url) {
        const findController = distribution[req.url]

        if (findController) {
          res.setHeader('Content-type', 'application/json')

          await findController({ req, res })
        } else {
          res.statusCode = 404
          res.end()
        }
      }
    })
    .listen(serverConfig.port, serverConfig.hostname, () =>
      logRes('Server start successful', `http://${serverConfig.hostname}:${serverConfig.port}`)
    )
}

main()
