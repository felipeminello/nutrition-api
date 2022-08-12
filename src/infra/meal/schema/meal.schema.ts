import { Schema, model } from 'mongoose'

export interface IMealItems {
  foodId: string
  food: string
  quantity: number
  calories: number
}

export interface IMeal {
  name: string
  dayOfWeek: number
  order: number
  items: IMealItems[]
}

const mealItemsSchema = new Schema({
  foodId: { type: Schema.Types.ObjectId, ref: 'Food', required: true },
  food: { type: String, required: true },
  quantity: { type: Number, required: true },
  calories: { type: Number, required: true }
}, {
  timestamps: false,
  _id: false
})

const mealSchema = new Schema<IMeal>({
  name: { type: String, required: true },
  dayOfWeek: { type: Number, required: true },
  order: { type: Number, required: true },
  items: [mealItemsSchema],
}, {
  timestamps: true,
  collection: 'meal'
})

export default model<IMeal>('Meal', mealSchema)