import Meal from '../entity/meal'
import MealItem from '../entity/meal-item'

interface MealFactoryProps {
  id?: string
  name: string
  items: MealItem[]
  createdAt?: Date
  updatedAt?: Date
}

export default class MealFactory {
  public static create(meal: MealFactoryProps): Meal {
    const now = new Date()
    const createdAt = meal.createdAt || now
    const updatedAt = meal.updatedAt || now
    
    return new Meal(meal.id || '', meal.name, meal.items, createdAt, updatedAt)
  }
}