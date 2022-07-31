export interface MealFoodItem {
  id: string | null;
  name: string;
  calories: number;
}

export default class MealItem {
  public food: MealFoodItem
  public quantity: number

  constructor(food: MealFoodItem, quantity: number) {
    this.food = food
    this.quantity = quantity
  }
}