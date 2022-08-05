export interface InputCreateMealDTO {
  name: string
  order: number
  items: {
    foodId: string
    quantity: number
  }[]
}

export interface OutputCreateMealDTO extends InputCreateMealDTO {
  id: string
  items: {
    foodId: string
    food: string
    quantity: number
  }[]
}