import { Router } from "express";
import {
  DeleteRoutesAdapter,
  ListRoutesAdapter,
  UpdateRoutesAdapter,
  UsersRoutesAdapter,
} from "../providers/express/implementations/express-adapter";
import { AuthenticationRoutesAdapter } from "../providers/express/implementations/express-adapter";
import { userController } from "../../modules/accounts/usecases/create-users";
import { authenticationController } from "../../modules/accounts/usecases/authentication-user";
import { updateUserController } from "../../modules/accounts/usecases/update-users";
import { deleteUserController } from "../../modules/accounts/usecases/delete-users";
import { listAllUsersController } from "../../modules/accounts/usecases/read-users/list-all";
const usersRoutes = Router();

usersRoutes
  .post("/create", UsersRoutesAdapter(userController))
  .post("/login", AuthenticationRoutesAdapter(authenticationController))
  .patch("/update/:id", UpdateRoutesAdapter(updateUserController))
  .delete("/delete/:id", DeleteRoutesAdapter(deleteUserController))
  .get("/list", ListRoutesAdapter(listAllUsersController))
  .get("/list/:id", ListRoutesAdapter(listAllUsersController));

export { usersRoutes };
