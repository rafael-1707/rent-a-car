import { Router } from "express";
import { specificationsController } from "../../cars/usecases/create-specification.ts/index";
import { SpecificationsRoutesAdapter } from "../providers/express/implementations/express-adapter";
const specificationsRoutes = Router();

specificationsRoutes.post(
  "/",
  SpecificationsRoutesAdapter(specificationsController)
);

export { specificationsRoutes };
