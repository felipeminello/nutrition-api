import MealRepositoryInterface from '@/domain/meal/repository/meal.repository.interface'
import { OutputListMealDto } from './list.meal.dto'

export default class MealListUseCase {
  private mealRepository: MealRepositoryInterface

  constructor(mealRepository: MealRepositoryInterface) {
    this.mealRepository = mealRepository
  }

  public async execute(): Promise<OutputListMealDto> {
    const meals = await this.mealRepository.findAll()
    return { meals }
  }
}