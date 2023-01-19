import FoodFactory from '@/domain/food/factory/food.factory'
import FoodRepositoryInterface from '@/domain/food/repository/food.repository.interface'
import { InputCreateFoodDTO, OutputCreateFoodDTO } from './create.food.dto'

export default class FoodCreateUseCase {
  private foodRepository: FoodRepositoryInterface

  constructor(foodRepository: FoodRepositoryInterface) {
    this.foodRepository = foodRepository
  }

  async execute(input: InputCreateFoodDTO): Promise<OutputCreateFoodDTO> {
    const foodFactory = FoodFactory.create(null, input.code, input.name, input.preparationCode, input.calories, input.protein, input.fat, input.carbs, input.fiber, input.chol, input.ashes, input.calcium, input.magnesium, input.humidity)
    const foodId = await this.foodRepository.create(foodFactory)

    return {
      id: foodId,
      ...input,
    }
  }
}
