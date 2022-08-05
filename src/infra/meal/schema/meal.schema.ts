import { Schema, model, Types } from 'mongoose'

export interface IMealItems {
  foodId: Types.ObjectId
  food: string
  quantity: number
  calories: number
}

export interface IMeal {
  name: string
  order: number
  items: IMealItems[]
}

const mealItemsSchema = new Schema<IMealItems>({
  foodId: {type: Schema.Types.ObjectId, ref: 'Food', required: true },
  food: { type: String, required: true },
  quantity: { type: Number, required: true },
  calories: { type: Number, required: true }
}, {
  timestamps: false,
  _id: false
})

const mealSchema = new Schema<IMeal>({
  name: { type: String, required: true },
  items: [mealItemsSchema],
}, {
  timestamps: true,
  collection: 'meal'
})

export default model<IMeal>('Meal', mealSchema)