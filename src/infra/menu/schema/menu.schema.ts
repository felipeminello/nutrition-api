import { Schema, model } from 'mongoose'

export interface IMealMenu {
  mealId: string
  name: string
  order: number
}

export interface IMenu {
  dayOfWeek: number
  startAt?: Date
  endAt?: Date
  meals: IMealMenu[]
}

const mealSchema = new Schema({
  mealId: { type: Schema.Types.ObjectId, ref: 'Meal', required: true },
  name: { type: String, required: true },
  order: { type: Number, required: true },
}, {
  timestamps: false,
  _id: false
})

const menuSchema = new Schema<IMenu>({
  dayOfWeek: { type: Number, required: true },
  startAt: { type: Date, required: false },
  endAt: { type: Date, required: false },
  meals: [mealSchema],
}, {
  timestamps: true,
  collection: 'menu'
})

export default model<IMenu>('Menu', menuSchema)