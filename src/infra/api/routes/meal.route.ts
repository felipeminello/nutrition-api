import FoodRepository from '@/infra/food/repository/food.repository'
import MealRepository from '@/infra/meal/repository/meal.repository'
import MealCreateUseCase from '@/usecase/meal/create/create.meal.usecase'
import { Request, Response, Router } from 'express'

export const mealRouter = Router()

mealRouter.post('/', async (req: Request, res: Response) => {
  const useCase = new MealCreateUseCase(new MealRepository(), new FoodRepository())

  try {
    const mealDto = {
      name: req.body.name,
      order: req.body.order,
      items: req.body.items
    }

    const output = await useCase.execute(mealDto)
    res.send(output)
  } catch (err) {
    res.status(500).send(err)
  }
})
