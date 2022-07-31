import Food from '@/domain/food/entity/food'

export default class FoodFactory {
  public static create(id: string, name: string, carbs: number, protein: number, fat: number, calories: number): Food {
    const now = new Date()
    return new Food(id, name, carbs, protein, fat, calories, now, now)
  }
}
