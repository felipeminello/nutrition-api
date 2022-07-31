import LoggerInterface from './logger.interface'
import pino from 'pino'

export default class Logger implements LoggerInterface {
  private logger: pino.Logger
  private static instance: Logger

  constructor() {
    this.logger = pino({
      name: 'api',
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
    })
  }

  info(data: any): void {
    this.logger.info(data)
  }
  error(data: any): void {
    this.logger.error(data)
  }
  warn(data: any): void {
    this.logger.warn(data)
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }

    return Logger.instance
  }
}
