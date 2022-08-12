import ValidatorInterface from '@/domain/@shared/validator/validator.interface'
import Food from '../entity/food'
import FoodValidator from '../validator/food.validator'

export default class FoodValidatorFactory {
  static create(): ValidatorInterface<Food> {
    return new FoodValidator()
  }
}
