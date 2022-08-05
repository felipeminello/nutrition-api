import { Router, Request, Response } from 'express'
import { foodRouter } from './food.route'
import { mealRouter } from './meal.route'

const router = Router()

router.use('/food', foodRouter)
router.use('/meal', mealRouter)

router.use((req: Request, res: Response) => res.status(404).json({
  success: false,
  payload: {
    msg: 'Method not found 404'
  }
}))

export default router
