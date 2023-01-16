import MealInterface from '@/domain/meal/entity/meal.interface'

export default class MenuMeal implements MealInterface {
  public mealId: string
  public name?: string
  public order: number

  constructor(mealId: string, name: string, order: number) {
    this.mealId = mealId
    this.name = name
    this.order = order
  }

  totalCalories(): number {
    throw new Error('Method not implemented.')
  }
} 