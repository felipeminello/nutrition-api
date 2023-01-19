import FoodRepositoryInterface from '@/domain/food/repository/food.repository.interface'
import MealFactory from '@/domain/meal/factory/meal.factory'
import MealRepositoryInterface from '@/domain/meal/repository/meal.repository.interface'
import { InputCreateMealDTO, OutputCreateMealDTO } from './create.meal.dto'

export default class MealCreateUseCase {
  private mealRepository: MealRepositoryInterface
  private foodRepository: FoodRepositoryInterface

  constructor(mealRepository: MealRepositoryInterface, foodRepository: FoodRepositoryInterface) {
    this.mealRepository = mealRepository
    this.foodRepository = foodRepository
  }

  async execute(input: InputCreateMealDTO): Promise<OutputCreateMealDTO> {
    const foods = await Promise.all(input.items.map(async item => {
      const food = await this.foodRepository.find(item.foodId)

      return {
        foodId: food.id,
        name: food.name,
        quantity: item.quantity,
        calories: food.calories / 100 * item.quantity,
      }
    }))

    const createData = {...input, items: foods.map(food => ({
      foodId: food.foodId as string,
      food: food.name,
      quantity: food.quantity,
      calories: food.calories,
    }))}

    const mealFactory = MealFactory.create(createData)

    const mealId = await this.mealRepository.create(mealFactory)

    return {
      id: mealId,
      name: input.name,
      order: input.order,
      items: foods.map(food => ({
        foodId: food.foodId as string,
        food: food.name,
        quantity: food.quantity,
      }))
    }
  }
}
