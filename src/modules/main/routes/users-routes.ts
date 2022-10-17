import { Router } from "express";
import {
  DeleteRoutesAdapter,
  ListRoutesAdapter,
  UpdateRoutesAdapter,
  UsersRoutesAdapter,
} from "../providers/express/implementations/express-adapter";
import { AuthenticationRoutesAdapter } from "../providers/express/implementations/express-adapter";
import { userController } from "../../accounts/usecases/create-users";
import { authenticationController } from "../../accounts/usecases/authentication-user";
import { updateUserController } from "../../accounts/usecases/update-users";
import { deleteUserController } from "../../accounts/usecases/delete-users";
import { listAllUsersController } from "../../accounts/usecases/read-users/list-all";
const usersRoutes = Router();

usersRoutes
  .post("/create", UsersRoutesAdapter(userController))
  .post("/login", AuthenticationRoutesAdapter(authenticationController))
  .patch("/update/:id", UpdateRoutesAdapter(updateUserController))
  .delete("/delete/:id", DeleteRoutesAdapter(deleteUserController))
  .get("/list", ListRoutesAdapter(listAllUsersController));

export { usersRoutes };
