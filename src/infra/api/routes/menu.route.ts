import { NextFunction, Request, Response, Router } from 'express'
import MealRepository from '@/infra/meal/repository/meal.repository'
import MenuRepository from '@/infra/menu/repository/menu.repository'
import MenuCreateUseCase from '@/usecase/menu/create/create.menu.usecase'
import MenuListUseCase from '@/usecase/menu/list-week/list-week.menu.usecase'

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

menuRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  const useCase = new MenuListUseCase(new MenuRepository())

  useCase.execute({
    startDate: req.query.startDate as string,
    endDate: req.query.endDate as string
  }).then(resp => res.send(resp)).catch(next)
})
