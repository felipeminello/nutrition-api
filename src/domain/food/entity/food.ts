import Entity from '@/domain/@shared/entity/entity.abstract'
import NotificationError from '@/domain/@shared/notification/notification.error'
import FoodValidatorFactory from '../factory/food.factory.validator'
import FoodInterface from './food.interface'

export default class Food extends Entity implements FoodInterface {
  public id: string | null
  public name: string
  public unit: string
  public quantity: number
  public calories: number
  public protein: number
  public fat: number
  public carbs: number
  public fiber: number
  public chol: number
  public ashes: number
  public calcium: number
  public magnesium: number
  public humidity: number
  public createdAt: Date
  public updatedAt: Date

  constructor(id: string | null, name: string, unit: string, quantity: number, calories: number, protein: number, fat: number, carbs: number, fiber: number, chol: number, ashes: number, calcium: number, magnesium: number, humidity: number, createdAt: Date, updatedAt: Date) {
    super()
    this.id = id
    this.name = name
    this.unit = unit
    this.quantity = quantity
    this.calories = calories
    this.protein = protein
    this.fat = fat
    this.carbs = carbs
    this.fiber = fiber
    this.chol = chol
    this.ashes = ashes
    this.calcium = calcium
    this.magnesium = magnesium
    this.humidity = humidity
    this.createdAt = createdAt
    this.updatedAt = updatedAt

    this.validate()

    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors())
    }
  }

  validate(): void {
    FoodValidatorFactory.create().validate(this)
  }
}
