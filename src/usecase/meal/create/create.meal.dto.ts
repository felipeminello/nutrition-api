export interface InputCreateMealDTO {
  name: string
  dayOfWeek: number
  order: number
  items: {
    foodId: string
    quantity: number
  }[]
}

export interface OutputCreateMealDTO extends Partial<InputCreateMealDTO> {
  id: string
  items: {
    foodId: string
    food: string
    quantity: number
  }[]
}