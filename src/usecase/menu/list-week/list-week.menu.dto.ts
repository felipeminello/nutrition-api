export interface OutputListWeekMenuDto {
  dayOfWeek: number
  calories: number
  meals: {
    name: string
  }[]
}

export interface InputListWeekMenuDto {
  startDate: string
  endDate: string
}
