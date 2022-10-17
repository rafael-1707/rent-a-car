import { Router } from "express";
import multer from "multer";
import { CategoriesRoutesAdapter } from "../providers/express/implementations/express-adapter";
import { ListRoutesAdapter } from "../providers/express/implementations/express-adapter";
import { categoriesController } from "../../cars/usecases/create-category/index";
import { listCategoriesController } from "../../cars/usecases/list-categories/index";
import { importCategoryController } from "../../cars/usecases/import-category/index";

const categoriesRoutes = Router();

categoriesRoutes
  .post("/", CategoriesRoutesAdapter(categoriesController))
  .get("/list", ListRoutesAdapter(listCategoriesController))
  .post("/import", multer({ dest: "./tmp" }).single("file"), (request) => {
    return importCategoryController.handle(request);
  });
export { categoriesRoutes };
