export interface InputCreateFoodDTO {
  code: number
  name: string
  preparationCode?: number
  calories: number
  protein: number
  fat: number
  carbs: number
  fiber: number
  chol?: number
  ashes?: number
  calcium?: number
  magnesium?: number
  humidity?: number
}

export interface OutputCreateFoodDTO extends InputCreateFoodDTO {
  id: string;
}
