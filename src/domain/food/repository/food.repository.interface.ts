import Food from '@/domain/food/entity/food'

export default interface FoodRepositoryInterface {
  create(entity: Food): Promise<void>;
  update(entity: Food): Promise<void>;
  find(id: string): Promise<Food>;
  findAll(): Promise<Food[]>;
}