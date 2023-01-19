import Food from '@/domain/food/entity/food'
import { PreparationCode } from '../enum/food.enum'

export default class FoodFactory {
  public static create(
    id: string | null, 
    code: number,
    name: string,
    preparationCode: PreparationCode | undefined,
    calories: number,
    protein: number,
    fat: number,
    carbs: number,
    fiber: number,
    chol: number | undefined,
    ashes: number | undefined,
    calcium: number | undefined,
    magnesium: number | undefined,
    humidity: number | undefined,
    createdAt?: Date,
    updatedAt?: Date
  ): Food {
    const now = new Date()
    createdAt = createdAt || now
    updatedAt = updatedAt || now

    return new Food(id, code, name, preparationCode, calories, protein, fat, carbs, fiber, chol, ashes, calcium, magnesium, humidity, createdAt, updatedAt)
  }
}
