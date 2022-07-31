import Food from '@/domain/food/entity/food'
import FoodRepositoryInterface from '@/domain/food/repository/food.repository.interface'

export default class FoodRepository implements FoodRepositoryInterface {
  create(entity: Food): Promise<void> {
    throw new Error('Method not implemented.')
  }
  update(entity: Food): Promise<void> {
    throw new Error('Method not implemented.')
  }
  find(id: string): Promise<Food> {
    throw new Error('Method not implemented.')
  }
  findAll(): Promise<Food[]> {
    throw new Error('Method not implemented.')
  }

}