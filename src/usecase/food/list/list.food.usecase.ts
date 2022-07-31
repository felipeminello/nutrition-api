import FoodRepositoryInterface from '@/domain/food/repository/food.repository.interface'
import { OutputListFoodDto } from './list.food.dto'

export default class FoodListUseCase {
  private foodRepository: FoodRepositoryInterface

  constructor(foodRepository: FoodRepositoryInterface) {
    this.foodRepository = foodRepository
  }

  public async execute(): Promise<OutputListFoodDto> {
    const foods = await this.foodRepository.findAll()
    return { foods }
  }
}