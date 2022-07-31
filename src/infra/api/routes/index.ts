import { Router, Request, Response } from 'express'
import { foodRouter } from './food.route'

const router = Router()

router.use('/food', foodRouter)

router.use((req: Request, res: Response) => res.status(404).json({
  success: false,
  payload: {
    msg: 'Method not found 404'
  }
}))

export default router
