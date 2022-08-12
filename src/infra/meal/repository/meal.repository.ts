import Meal from '@/domain/meal/entity/meal'
import MealFactory from '@/domain/meal/factory/meal.factory'
import MealRepositoryInterface from '@/domain/meal/repository/meal.repository.interface'
import { Model } from 'mongoose'
import mealSchema, { IMeal } from '../schema/meal.schema'

export default class MealRepository implements MealRepositoryInterface {
  private mealSchema: Model<IMeal>

  constructor() {
    this.mealSchema = mealSchema
  }

  async create(input: Meal): Promise<string> {
    const meal = await this.mealSchema.create({
      name: input.name,
      dayOfWeek: input.dayOfWeek,
      order: input.order,
      items: input.items,
    })

    return `${meal.id}`
  }

  async update(input: Meal): Promise<void> {
    await this.mealSchema.updateOne({
      _id: input.id
    }, {
      $set: {
        name: input.name,
        order: input.order,
      }
    })
  }

  async find(id: string): Promise<Meal> {
    const meal = await this.mealSchema.findById(id).populate('items')

    if (!meal) {
      throw new Error('Meal not found')
    }

    return MealFactory.create(meal)
  }

  async findAll(): Promise<Meal[]> {
    const meals = await this.mealSchema.find().populate('items')

    return meals.map(meal => MealFactory.create(meal))
  }
}