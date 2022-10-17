import { ImportCategoryUseCase } from "./import-category-usecase";
import { ImportCategoryController } from "./import-category-controller";
import { PrismaCategoriesRepository } from "../../repositories/implementations/categories-repository";

const categoriesRepository = new PrismaCategoriesRepository();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
