export default class MealItem {
  public foodId: string
  public food: string
  public quantity: number
  public calories: number

  constructor(foodId: string, food: string, quantity: number, calories: number) {
    this.foodId = foodId
    this.food = food
    this.quantity = quantity
    this.calories = calories
  }
}