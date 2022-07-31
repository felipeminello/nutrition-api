import Food from '@/domain/food/entity/food'

export default class FoodFactory {
  public static create(
    id: string | null,
    name: string,
    unit: string,
    quantity: number,
    carbs: number,
    protein: number,
    fat: number,
    calories: number,
    createdAt?: Date,
    updatedAt?: Date
  ): Food {
    const now = new Date()
    createdAt = createdAt || now
    updatedAt = updatedAt || now
    
    return new Food(id, name, unit, quantity, carbs, protein, fat, calories, createdAt, updatedAt)
  }
}
