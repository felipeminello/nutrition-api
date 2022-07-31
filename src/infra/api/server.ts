import { app } from '@/infra/api/express'
import Logger from '@/infra/logger/logger.pino'
import env from '@/infra/config/env'
import { connect, close } from './mongo'

enum ExitStatus {
  Failure = 1,
  Success = 0,
}

(async (): Promise<void> => {
  const port = Number(env.port)

  const logger = Logger.getInstance()

  try {
    await connect()

    const server = app.listen(port, () => {
      logger.info(`Server listening on port ${port}`)
    })

    const exitSignals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT']

    for (const exitSignal of exitSignals) {
      process.on(exitSignal, async () => {
        try {
          await close()
          server.close(() => {
            logger.info('App exited with success')
            process.exit(ExitStatus.Success)  
          })
        } catch (error) {
          logger.error(`App exited with error: ${error}`)
          process.exit(ExitStatus.Failure)
        }
      })
    }
  } catch (error) {
    logger.error(`App exited with error: ${error}`)
    process.exit(ExitStatus.Failure)
  }
})()
