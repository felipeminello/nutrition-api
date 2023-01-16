import Menu from '@/domain/menu/entity/menu'
import MenuMeal from '../entity/menu-meal'

interface MenuFactoryProps {
  id?: string
  startAt?: Date
  endAt?: Date
  dayOfWeek: number
  meals: MenuMeal[]
  createdAt?: Date
  updatedAt?: Date
}

export default class MealFactory {
  public static create(menu: MenuFactoryProps): Menu {
    const now = new Date()

    const startAt = menu.startAt || now
    const endAt = menu.endAt || now

    const createdAt = menu.createdAt || now
    const updatedAt = menu.updatedAt || now
    
    return new Menu(menu.id || '', startAt, endAt, menu.dayOfWeek, menu.meals, createdAt, updatedAt)
  }
}