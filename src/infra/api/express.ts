import express, { Express } from 'express'
import pinoHttp from 'pino-http'
import router from './routes'

export const app: Express = express()

app.use(pinoHttp())
app.use(express.json())
app.use(express.urlencoded({extended: true})) 

app.use('/api', router)
