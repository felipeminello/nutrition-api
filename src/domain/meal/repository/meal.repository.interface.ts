import Meal from '@/domain/meal/entity/meal'

export default interface MealRepositoryInterface {
  create(entity: Meal): Promise<string>;
  update(entity: Meal): Promise<void>;
  find(id: string): Promise<Meal>;
  findAll(): Promise<Meal[]>;
}