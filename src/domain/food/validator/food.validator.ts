import ValidatorInterface from '@/domain/@shared/validator/validator.interface'
import Food from '../entity/food'

export default class FoodValidator implements ValidatorInterface<Food> {
  validate(entity: Food): void {
    if (!entity.name) {
      entity.notification.addError({
        context: 'Food',
        message: 'Name is required'
      })
    }
    if (!entity.calories) {
      entity.notification.addError({
        context: 'Food',
        message: 'Kcal is required'
      })
    }
  }
}
