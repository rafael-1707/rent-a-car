import { Router } from "express";
import multer from "multer";
import { CategoriesRoutesAdapter } from "../providers/express/implementations/express-adapter";
import { categoriesController } from "../../cars/usecases/create-category/index";
import { importCategoryController } from "../../cars/usecases/import-category/index";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const categoriesRoutes = Router();

categoriesRoutes
  .post("/", ensureAuthenticated, CategoriesRoutesAdapter(categoriesController))
  .get("/list")
  .post(
    "/import",
    ensureAuthenticated,
    multer({ dest: "./tmp" }).single("file"),
    (request) => {
      return importCategoryController.handle(request);
    }
  );
export { categoriesRoutes };
