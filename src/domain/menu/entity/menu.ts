import MenuMeal from './menu-meal'
import MenuInterface from './menu.interface'

export default class Menu implements MenuInterface {
  public id: string
  public startAt: Date
  public endAt: Date
  public dayOfWeek: number
  public meals: MenuMeal[]
  public createdAt: Date
  public updatedAt: Date

  constructor(id: string, startAt: Date, endAt: Date, dayOfWeek: number, meals: MenuMeal[], createdAt: Date, updatedAt: Date) {
    this.id = id
    this.startAt = startAt
    this.endAt = endAt
    this.dayOfWeek = dayOfWeek
    this.meals = meals
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
  totalProtein(): number {
    throw new Error('Method not implemented.')
  }
  totalCarbs(): number {
    throw new Error('Method not implemented.')
  }
  totalFat(): number {
    throw new Error('Method not implemented.')
  }

  public totalCalories(): number {
    return this.meals.reduce((acc, item) => acc + (item.totalCalories() * item.totalCalories()), 0)
  }
}