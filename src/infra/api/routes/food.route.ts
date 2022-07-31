import FoodRepository from '@/infra/food/repository/food.repository'
import FoodCreateUseCase from '@/usecase/food/create/create.food.usecase'
import FoodListUseCase from '@/usecase/food/list/list.food.usecase'
import { Request, Response, Router } from 'express'

export const foodRouter = Router()

foodRouter.post('/', async (req: Request, res: Response) => {
  const useCase = new FoodCreateUseCase(new FoodRepository())

  try {
    const foodDto = {
      name: req.body.name,
      carbs: req.body.carbs,
      protein: req.body.protein,
      fat: req.body.fat,
      calories: req.body.kcal,
    }

    const output = await useCase.execute(foodDto)
    res.send(output)
  } catch (err) {
    res.status(500).send(err)
  }
})

foodRouter.get('/', async (_: Request, res: Response) => {
  const useCase = new FoodListUseCase(new FoodRepository())

  try {
    const output = await useCase.execute()
    res.send(output)
  } catch (err) {
    res.status(500).send(err)
  }
})