export interface InputCreateMenuDTO {
  dayOfWeek: number
  startAt: Date
  endAt: Date
  meals: {
    mealId: string
    order: number
  }[]
}

export interface OutputCreateMenuDTO {
  id: string
}