import MealRepository from '@/infra/meal/repository/meal.repository'
import MenuRepository from '@/infra/menu/repository/menu.repository'
import MenuCreateUseCase from '@/usecase/menu/create/create.menu.usecase'
import { Request, Response, Router } from 'express'

export const menuRouter = Router()

menuRouter.post('/', async (req: Request, res: Response) => {
  const useCase = new MenuCreateUseCase(new MenuRepository(), new MealRepository())

  try {
    const menuDto = {
      dayOfWeek: req.body.dayOfWeek,
      startAt: req.body.startAt,
      endAt: req.body.endAt,
      meals: req.body.meals
    }

    const output = await useCase.execute(menuDto)
    res.send(output)
  } catch (err) {
    res.status(500).send(err)
  }
})
