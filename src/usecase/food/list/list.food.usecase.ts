import FoodRepositoryInterface from '@/domain/food/repository/food.repository.interface'
import { InputListFoodDto, OutputListFoodDto } from './list.food.dto'

export default class FoodListUseCase {
  private foodRepository: FoodRepositoryInterface

  constructor(foodRepository: FoodRepositoryInterface) {
    this.foodRepository = foodRepository
  }

  public async execute(params: InputListFoodDto): Promise<OutputListFoodDto[]> {
    const page = params.page || 1
    const itemsPerPage = params.itemsPerPage || 20

    const foods = await this.foodRepository.findAll(page, itemsPerPage)

    return foods.map(food => ({
      id: food.id || '',
      name: food.name,
      calories: food.calories,
      carbs: food.carbs,
      protein: food.protein,
      fat: food.fat,
      fiber: food.fiber 
    }))
  }
}
