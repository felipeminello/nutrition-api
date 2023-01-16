import Menu from '@/domain/menu/entity/menu'

export default interface MenuRepositoryInterface {
  create(entity: Menu): Promise<string>;
  update(entity: Menu): Promise<void>;
  find(id: string): Promise<Menu>;
  findAll(): Promise<Menu[]>;
}