import MealItem from './meal-item'
import MealInterface from './meal.interface'

export default class Meal implements MealInterface {
  public id: string
  public order: number
  public name: string
  public items: MealItem[]
  public createdAt: Date
  public updatedAt: Date

  constructor(id: string, order: number, name: string, items: MealItem[], createdAt: Date, updatedAt: Date) {
    this.id = id
    this.order = order
    this.name = name
    this.items = items
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  public totalCalories(): number {
    return this.items.reduce((acc, item) => acc + (item.quantity * item.calories), 0)
  }
}