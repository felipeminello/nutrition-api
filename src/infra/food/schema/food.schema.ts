import Food from '@/domain/food/entity/food'
import { PreparationCode } from '@/domain/food/enum/food.enum'
import { Document, Schema, model } from 'mongoose'

export interface IFood extends Document<Food> {
  code: number
  name: string
  preparationCode?: PreparationCode
  calories: number
  protein: number
  fat: number
  carbs: number
  fiber: number
  chol?: number
  ashes?: number
  calcium?: number
  magnesium?: number
  humidity?: number
  createdAt: Date
  updatedAt: Date
}

const foodSchema = new Schema<IFood>({
  code: { type: Number, required: true },
  name: { type: String, required: true },
  preparationCode: { type: Number },
  calories: { type: Number, required: true },
  protein: { type: Number, required: true },
  fat: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fiber: { type: Number, required: true },
  chol: { type: Number },
  calcium: { type: Number },
  ashes: { type: Number },
  magnesium: { type: Number },
  humidity: { type: Number }
}, {
  timestamps: true,
  collection: 'food'
})

export default model<IFood>('Food', foodSchema)