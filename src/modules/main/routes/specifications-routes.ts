import { Router } from "express";
import { specificationsController } from "../../cars/usecases/create-specification.ts/index";
import { SpecificationsRoutesAdapter } from "../providers/express/implementations/express-adapter";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const specificationsRoutes = Router();

specificationsRoutes.post(
  "/",
  ensureAuthenticated,
  SpecificationsRoutesAdapter(specificationsController)
);

export { specificationsRoutes };
