import FoodInterface from './food.interface'

export default class Food implements FoodInterface {
  public id: string | null
  public name: string
  public unit: string
  public carbs: number
  public protein: number
  public fat: number
  public calories: number
  public createdAt: Date
  public updatedAt: Date

  constructor(id: string | null, name: string, unit: string, carbs: number, protein: number, fat: number, calories: number, createdAt: Date, updatedAt: Date) {
    this.id = id
    this.name = name
    this.unit = unit
    this.carbs = carbs
    this.protein = protein
    this.fat = fat
    this.calories = calories
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
