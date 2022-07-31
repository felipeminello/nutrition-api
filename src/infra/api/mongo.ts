import { connect as mongooseConnect, connection } from 'mongoose'
import env from '@/infra/config/env'

export const connect = async (): Promise<void> => {
  await mongooseConnect(env.mongoUrl)
}

export const close = (): Promise<void> => connection.close()
