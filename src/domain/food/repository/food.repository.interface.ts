import Food from '@/domain/food/entity/food'

export default interface FoodRepositoryInterface {
  create(entity: Food): Promise<string>;
  update(entity: Food): Promise<void>;
  find(id: string): Promise<Food>;
  findAll(page: number, itemsPerPage: number): Promise<Food[]>;
}