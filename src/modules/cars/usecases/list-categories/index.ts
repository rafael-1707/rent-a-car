import { ListCategoriesUseCase } from "./list-categories-usecase";
import { ListCategoriesController } from "./list-categories-controller";
import { PrismaCategoriesRepository } from "../../repositories/implementations/categories-repository";

const categoriesRepository = new PrismaCategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
