import Entity from '@/domain/@shared/entity/entity.abstract'
import NotificationError from '@/domain/@shared/notification/notification.error'
import { PreparationCode } from '../enum/food.enum'
import FoodValidatorFactory from '../factory/food.factory.validator'
import FoodInterface from './food.interface'

export default class Food extends Entity implements FoodInterface {
  public id: string | null
  public code: number
  public name: string
  public preparationCode?: PreparationCode
  public calories: number
  public protein: number
  public fat: number
  public carbs: number
  public fiber: number
  public chol?: number
  public ashes?: number
  public calcium?: number
  public magnesium?: number
  public humidity?: number
  public createdAt: Date
  public updatedAt: Date

  constructor(
    id: string | null, 
    code: number,
    name: string,
    preparationCode: PreparationCode | undefined,
    calories: number,
    protein: number,
    fat: number,
    carbs: number,
    fiber: number,
    chol: number | undefined,
    ashes: number | undefined,
    calcium: number | undefined,
    magnesium: number | undefined,
    humidity: number | undefined,
    createdAt: Date,
    updatedAt: Date
  ) {
    super()
    this.id = id
    this.code = code
    this.name = name
    this.preparationCode = preparationCode
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
