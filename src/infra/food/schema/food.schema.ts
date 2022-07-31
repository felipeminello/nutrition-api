import Food from '@/domain/food/entity/food'
import { Schema, model } from 'mongoose'

const foodSchema = new Schema<Food>({
  name: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'food'
})

export default model<Food>('Food', foodSchema)