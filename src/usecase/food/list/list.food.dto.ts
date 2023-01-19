import Food from '@/domain/food/entity/food'

export interface OutputListFoodDto extends Partial<Food> {
  id: string
  name: string
  calories: number
  fat: number
  carbs: number
  protein: number
  fiber: number
}

export interface InputListFoodDto {
  page?: number
  itemsPerPage?: number
}