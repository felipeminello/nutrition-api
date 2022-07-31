import Meal from '../entity/meal'
import MealItem from '../entity/meal-item'

interface MealFactoryProps extends Meal {
  items: MealItem[]
}

export default class MealFactory {
  public static create(meal: MealFactoryProps): Meal {
    return new Meal(meal.id, meal.order, meal.name, meal.items, meal.createdAt, meal.updatedAt)
  }
}