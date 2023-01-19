import FoodRepository from '@/infra/food/repository/food.repository'
import FoodCreateUseCase from '@/usecase/food/create/create.food.usecase'
import FoodListUseCase from '@/usecase/food/list/list.food.usecase'
import { NextFunction, Request, Response, Router } from 'express'

export const foodRouter = Router()

foodRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const useCase = new FoodCreateUseCase(new FoodRepository())

    const foodDto = {
      name: req.body.name,
      code: req.body.code,
      preparationCode: req.body.preparationCode,
      calories: req.body.kcal,
      protein: req.body.protein,
      fat: req.body.fat,
      carbs: req.body.carbs,
      fiber: req.body.fiber,
      chol: req.body.chol,
      ashes: req.body.ashes,
      calcium: req.body.calcium,
      magnesium: req.body.magnesium,
      humidity: req.body.humidity,
    }

    const output = await useCase.execute(foodDto)
    res.send(output)
  } catch (err) {
    next(err)
  }
})

foodRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  const useCase = new FoodListUseCase(new FoodRepository())

  const page = req.query.page ? +req.query.page : undefined
  const itemsPerPage = req.query.itemsPerPage ? +req.query.itemsPerPage : undefined
  
  useCase.execute({ page, itemsPerPage })
    .then(output => res.send(output))
    .catch(next)
})