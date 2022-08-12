// import NotificationError from '@/domain/@shared/notification/notification.error'
import express, { Express, Request, Response, NextFunction } from 'express'
import pinoHttp from 'pino-http'
import router from './routes'

export const app: Express = express()

app.use(pinoHttp())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Headers', 'Content-type, Accept, Authorization, Range, X-Requested-With')

  next()
})

app.use('/api', router)

/* eslint-disable-next-line */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  let status = 500

  // console.log(require('util').inspect(err instanceof NotificationError, false, null, true))
  

  if (err.name === 'ValidationError') {
    status = 400
  }

  if (err.name === 'UnauthorizedError') {
    status = 401
  }

  if (err.name === 'NotFindError') {
    status = 404
  }
  
  return res.status(status).json({
    success: false,
    payload: {
      err
    }
  })
})
