import { CreateCategoryService } from "./category-usecase";
import { CategoriesController } from "./categories-controller";
import { PrismaCategoriesRepository } from "../../repositories/implementations/categories-repository";

const categoryRepository = new PrismaCategoriesRepository();
const createCategoryService = new CreateCategoryService(categoryRepository);
const categoriesController = new CategoriesController(createCategoryService);

export { categoriesController };
