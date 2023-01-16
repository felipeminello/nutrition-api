import Menu from '@/domain/menu/entity/menu'
import MenuRepositoryInterface from '@/domain/menu/repository/menu.repository.interface'
import { Model } from 'mongoose'
import menuSchema, { IMenu } from '../schema/menu.schema'

export default class MenuRepository implements MenuRepositoryInterface {
  private menuSchema: Model<IMenu>

  constructor() {
    this.menuSchema = menuSchema
  }
  update(entity: Menu): Promise<void> {
    throw new Error('Method not implemented.')
  }
  find(id: string): Promise<Menu> {
    throw new Error('Method not implemented.')
  }
  findAll(): Promise<Menu[]> {
    throw new Error('Method not implemented.')
  }

  async create(input: Menu): Promise<string> {
    const menu = await this.menuSchema.create({
      dayOfWeek: input.dayOfWeek,
      meals: input.meals,
    })

    return `${menu.id}`
  }
}