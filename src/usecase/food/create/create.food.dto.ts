export interface InputCreateFoodDTO {
  name: string
  unit?: string
  quantity?: number
  carbs: number
  protein: number
  fat: number
  calories: number
}

export interface OutputCreateFoodDTO extends InputCreateFoodDTO {
  id: string;
}
