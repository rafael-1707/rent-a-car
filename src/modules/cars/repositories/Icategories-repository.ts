import { Categories } from "../entities/categories";

export interface ICategoriesRepository {
  findByName(name: string): Promise<boolean>;
  createCategory(data: Categories): Promise<Categories>;
  listCategories(): Promise<Categories[]>;
}
