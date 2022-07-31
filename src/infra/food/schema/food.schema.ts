import Food from '@/domain/food/entity/food'
import { Document, Schema, model } from 'mongoose'

export interface IFood extends Document<Food> {
  name: string
  unit: string
  carbs: number
  protein: number
  fat: number
  calories: number
  createdAt: Date
  updatedAt: Date
}

const foodSchema = new Schema<IFood>({
  name: { type: String, required: true },
  unit: { type: String, required: true },
  carbs: { type: Number, required: true },
  protein: { type: Number, required: true },
  fat: { type: Number, required: true },
  calories: { type: Number, required: true }
}, {
  timestamps: true,
  collection: 'food'
})

export default model<IFood>('Food', foodSchema)