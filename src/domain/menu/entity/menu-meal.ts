export default class MenuMeal {
  public mealId: string
  public name?: string
  public order: number

  constructor(mealId: string, name: string, order: number) {
    this.mealId = mealId
    this.name = name
    this.order = order
  }
}