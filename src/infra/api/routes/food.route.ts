import { Request, Response, Router } from 'express'

export const foodRouter = Router()

foodRouter.post('/', async (req: Request, res: Response) => {
  console.log('aqui')

  res.send({
    message: 'Hello World'
  })
})
