import { ICategoriesRepository } from "../../repositories/Icategories-repository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute() {
    await this.categoriesRepository.listCategories();
  }
}
