import { ICategoriesRepository } from "../../repositories/Icategories-repository";
import { CategoryExistsError } from "../../../shared/errors/category-exists-error";
import { badRequest } from "../../../shared/helpers/http-helper";

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

    if (categoryAlreadyExists) return badRequest(new CategoryExistsError(name));

    await this.categoriesRepository.createCategory({
      name,
      description,
    });
    return "category created successfully";
  }
}
