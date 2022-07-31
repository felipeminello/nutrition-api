import FoodFactory from '@/domain/food/factory/food.factory'
import FoodRepositoryInterface from '@/domain/food/repository/food.repository.interface'
import { InputCreateFoodDTO, OutputCreateFoodDTO } from './create.food.dto'

export default class FoodCreateUseCase {
  private foodRepository: FoodRepositoryInterface

  constructor(foodRepository: FoodRepositoryInterface) {
    this.foodRepository = foodRepository
  }

  async execute(input: InputCreateFoodDTO): Promise<OutputCreateFoodDTO> {
    let { unit } = input

    if (!unit) {
      unit = '100g'
    }

    const foodFactory = FoodFactory.create(null, input.name, unit, input.carbs, input.protein, input.fat, input.calories)
    const foodId = await this.foodRepository.create(foodFactory)

    return {
      id: foodId,
      unit,
      ...input,
    }
  }
}