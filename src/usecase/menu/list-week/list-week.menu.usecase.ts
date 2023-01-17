import MenuRepositoryInterface from '@/domain/menu/repository/menu.repository.interface'
import NotFindError from '@/usecase/error/notfind.error'
import { InputListWeekMenuDto, OutputListWeekMenuDto } from './list-week.menu.dto'

export default class MenuListUseCase {
  private menuRepository: MenuRepositoryInterface

  constructor(menuRepository: MenuRepositoryInterface) {
    this.menuRepository = menuRepository
  }

  public async execute(input: InputListWeekMenuDto): Promise<OutputListWeekMenuDto[]> {
    const startAt = new Date(input.startDate)
    const endAt = new Date(input.endDate)

    console.log('startAt', startAt)
    console.log('endAt', endAt)

    const menus = await this.menuRepository.findByDateRange(startAt, endAt)

    if (!menus.length) {
      throw new NotFindError('Menus not find')
    }

    return menus.map(menu => ({
      dayOfWeek: menu.dayOfWeek,
      calories: 0,
      meals: menu.meals.map(meal => ({
        name: `${meal.name}`
      }))
    }))
  }
}
