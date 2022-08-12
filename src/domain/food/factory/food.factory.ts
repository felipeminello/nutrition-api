import Food from '@/domain/food/entity/food'

export default class FoodFactory {
  public static create(
    id: string | null,
    name: string,
    unit: string,
    quantity: number,
    calories: number,
    protein: number,
    fat: number,
    carbs: number,
    fiber: number,
    chol: number,
    ashes: number,
    calcium: number,
    magnesium: number,
    humidity: number,
    createdAt?: Date,
    updatedAt?: Date
  ): Food {
    const now = new Date()
    createdAt = createdAt || now
    updatedAt = updatedAt || now

    return new Food(id, name, unit, quantity, calories, protein, fat, carbs, fiber, chol, ashes, calcium, magnesium, humidity, createdAt, updatedAt)
  }
}
