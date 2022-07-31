import FoodInterface from './food.interface'

export default class Food implements FoodInterface {
  public id: string
  public name: string
  public carbs: number
  public protein: number
  public fat: number
  public calories: number
  public createdAt: Date
  public updatedAt: Date

  constructor(id: string, name: string, carbs: number, protein: number, fat: number, calories: number, createdAt: Date, updatedAt: Date) {
    this.id = id
    this.name = name
    this.carbs = carbs
    this.protein = protein
    this.fat = fat
    this.calories = calories
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
