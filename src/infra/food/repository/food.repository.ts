import Food from '@/domain/food/entity/food'
import FoodFactory from '@/domain/food/factory/food.factory'
import FoodRepositoryInterface from '@/domain/food/repository/food.repository.interface'
import { Model } from 'mongoose'
import foodSchema, { IFood } from '../schema/food.schema'

export default class FoodRepository implements FoodRepositoryInterface {
  private foodSchema: Model<IFood>

  constructor() {
    this.foodSchema = foodSchema
  }

  async create(input: Food): Promise<string> {
    const food = await this.foodSchema.create({
      name: input.name,
      unit: input.unit,
      quantity: input.quantity,
      carbs: input.carbs,
      protein: input.protein,
      fat: input.fat,
      calories: input.calories
    })

    return `${food.id}`
  }

  async update(input: Food): Promise<void> {
    await this.foodSchema.updateOne({
      _id: input.id
    }, {
      $set: {
        name: input.name,
        unit: input.unit,
        quantity: input.quantity,
        carbs: input.carbs,
        protein: input.protein,
        fat: input.fat,
        calories: input.calories
      }
    })
  }

  async find(id: string): Promise<Food> {
    const food = await this.foodSchema.findById(id)

    if (!food) {
      throw new Error('Food not found')
    }

    return FoodFactory.create(food.id, food.name, food.unit, food.quantity, food.carbs, food.protein, food.fat, food.calories, food.createdAt, food.updatedAt)
  }

  async findAll(): Promise<Food[]> {
    const foods = await this.foodSchema.find()

    return foods.map(food => FoodFactory.create(food.id, food.name, food.unit, food.quantity, food.carbs, food.protein, food.fat, food.calories, food.createdAt, food.updatedAt))
  }
}