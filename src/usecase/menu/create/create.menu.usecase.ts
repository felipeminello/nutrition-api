import MealRepositoryInterface from '@/domain/meal/repository/meal.repository.interface'
import MenuFactory from '@/domain/menu/factory/menu.factory'
import MenuRepositoryInterface from '@/domain/menu/repository/menu.repository.interface'
import { InputCreateMenuDTO, OutputCreateMenuDTO } from './create.menu.dto'

export default class MenuCreateUseCase {
  private menuRepository: MenuRepositoryInterface
  private mealRepository: MealRepositoryInterface

  constructor(menuRepository: MenuRepositoryInterface, mealRepository: MealRepositoryInterface) {
    this.menuRepository = menuRepository
    this.mealRepository = mealRepository
  }

  async execute(input: InputCreateMenuDTO): Promise<OutputCreateMenuDTO> {
    const meals = await Promise.all(input.meals.map(async mealItem => {
      const meal = await this.mealRepository.find(mealItem.mealId)
      
      return {
        mealId: meal.id,
        name: meal.name,
        order: mealItem.order,
        totalCalories: () => 0
      }
    }))

    const { dayOfWeek, startAt, endAt } = input

    const menuFactory = MenuFactory.create({ dayOfWeek, startAt, endAt, meals })

    const menuId = await this.menuRepository.create(menuFactory)

    return {
      id: menuId
    }
  }
}
