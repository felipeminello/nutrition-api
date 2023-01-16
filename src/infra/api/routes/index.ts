import { Router, Request, Response } from 'express'
// import cors from 'cors'
import { foodRouter } from './food.route'
import { mealRouter } from './meal.route'
import { menuRouter } from './menu.route'

const router = Router()

// const options: cors.CorsOptions = {
//   allowedHeaders: [
//     'Origin',
//     'X-Requested-With',
//     'Content-Type',
//     'Accept',
//     'X-Access-Token',
//   ],
//   credentials: true,
//   methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//   origin: 'https://portal.nutrition.local',
//   preflightContinue: false,
// }

// router.use(cors(options))

router.use('/food', foodRouter)
router.use('/meal', mealRouter)
router.use('/menu', menuRouter)

router.use((req: Request, res: Response) => res.status(404).json({
  success: false,
  payload: {
    msg: 'Method not found 404'
  }
}))

export default router
