import { ICategoriesRepository } from "../../repositories/Icategories-repository";
import { CategoryExistsError } from "../../../../shared/errors/category-exists-error";

type IRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest) {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) return new CategoryExistsError(name);

    await this.categoriesRepository.createCategory({
      name,
      description,
    });
    return "category created successfully";
  }
}
