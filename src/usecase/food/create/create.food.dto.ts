export interface InputCreateFoodDTO {
  name: string
  unit?: string
  quantity?: number
  calories: number
  protein: number
  fat: number
  carbs: number
  fiber: number
  chol: number
  ashes: number
  calcium: number
  magnesium: number
  humidity: number
}

export interface OutputCreateFoodDTO extends InputCreateFoodDTO {
  id: string;
}
