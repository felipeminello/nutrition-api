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
      calories: input.calories,
      protein: input.protein,
      fat: input.fat,
      carbs: input.carbs,
      fiber: input.fiber,
      chol: input.chol,
      ashes: input.ashes,
      calcium: input.calcium,
      magnesium: input.magnesium,
      humidity: input.humidity,
    })

    return `${food.id}`
  }

  async update(input: Food): Promise<void> {
    await this.foodSchema.updateOne({
      _id: input.id
    }, {
      $set: {
        name: input.name,
        code: input.code,
        preparationCode: input.preparationCode,
        carbs: input.carbs,
        protein: input.protein,
        fat: input.fat,
        calories: input.calories,
        fiber: input.fiber
      }
    })
  }

  async find(id: string): Promise<Food> {
    const food = await this.foodSchema.findById(id)

    if (!food) {
      throw new Error('Food not found')
    }

    return FoodFactory.create(food.id, food.code, food.name, food.preparationCode, food.calories, food.protein, food.fat, food.carbs, food.fiber, food.chol, food.ashes, food.calcium, food.magnesium, food.humidity, food.createdAt, food.updatedAt)
  }

  async findAll(page: number, itemsPerPage: number): Promise<Food[]> {
    const foods = await this.foodSchema.find()
      .skip( page > 0 ? ( ( page - 1 ) * itemsPerPage ) : 0 )
      .limit( itemsPerPage )

    return foods.map(food => FoodFactory.create(food.id, food.code, food.name, food.preparationCode, food.calories, food.protein, food.fat, food.carbs, food.fiber, food.chol, food.ashes, food.calcium, food.magnesium, food.humidity, food.createdAt, food.updatedAt))
  }
}
