import MenuRepositoryInterface from '@/domain/menu/repository/menu.repository.interface'
import { InputListWeekMenuDto, OutputListWeekMenuDto } from './list-week.menu.dto'

export default class MenuListUseCase {
  private menuRepository: MenuRepositoryInterface

  constructor(menuRepository: MenuRepositoryInterface) {
    this.menuRepository = menuRepository
  }

  public async execute(input: InputListWeekMenuDto): Promise<OutputListWeekMenuDto> {

    
    const menu = await this.menuRepository.findAll()
    return { menus }
  }
}
