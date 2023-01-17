import { Model } from 'mongoose'
import Menu from '@/domain/menu/entity/menu'
import MenuFactory from '@/domain/menu/factory/menu.factory'
import MenuRepositoryInterface from '@/domain/menu/repository/menu.repository.interface'
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
  async findByDateRange(startAt: Date, endAt: Date): Promise<Menu[]> {
    const menus = await this.menuSchema.find({ 
      startAt: {
        $lte: startAt
      },
      endAt: {
        $gte: endAt
      }
    }).populate('meals')

    return menus.map(menu => MenuFactory.create(menu))
  }

  async create(input: Menu): Promise<string> {
    const menu = await this.menuSchema.create(input)

    return `${menu.id}`
  }
}