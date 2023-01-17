import Menu from '@/domain/menu/entity/menu'

export default interface MenuRepositoryInterface {
  create(entity: Menu): Promise<string>;
  update(entity: Menu): Promise<void>;
  find(id: string): Promise<Menu>;
  findByDateRange(startAt: Date, endAt: Date): Promise<Menu[]>;
}