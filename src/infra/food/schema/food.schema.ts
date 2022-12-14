import Food from '@/domain/food/entity/food'
import { Document, Schema, model } from 'mongoose'

export interface IFood extends Document<Food> {
  name: string
  unit: string
  quantity: number
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
  createdAt: Date
  updatedAt: Date
}

const foodSchema = new Schema<IFood>({
  name: { type: String, required: true },
  unit: { type: String, required: true },
  quantity: { type: Number, required: true },
  calories: { type: Number, required: true },
  protein: { type: Number, required: true },
  fat: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fiber: { type: Number, required: true },
  chol: { type: Number, required: true },
  calcium: { type: Number, required: true },
  ashes: { type: Number, required: true },
  magnesium: { type: Number, required: true },
  humidity: { type: Number, required: true }
}, {
  timestamps: true,
  collection: 'food'
})

export default model<IFood>('Food', foodSchema)