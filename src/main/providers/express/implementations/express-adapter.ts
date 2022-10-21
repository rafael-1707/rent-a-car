import { Request, Response } from "express";
import { CategoriesController } from "../../../../modules/cars/usecases/create-category/categories-controller";
import { SpecificationController } from "../../../../modules/cars/usecases/create-specification/specification-controller";
import { UserController } from "../../../../modules/accounts/usecases/create-users/create-users-controller";
import { AuthenticationController } from "../../../../modules/accounts/usecases/authentication-user/authentication-controller";
import { HttpRequest } from "../http";
import { UpdateUserController } from "../../../../modules/accounts/usecases/update-users/update-controller";
import { DeleteUserController } from "../../../../modules/accounts/usecases/delete-users/delete-controller";
import { ListUserController } from "../../../../modules/accounts/usecases/read-users/list-all/list-controller";
import { GetByIdUserController } from "../../../../modules/accounts/usecases/read-users/get-by-id-users/get-by-id-controller";

export const CategoriesRoutesAdapter = (controller: CategoriesController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

export const SpecificationsRoutesAdapter = (
  specification: SpecificationController
) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };
    const httpResponse = await specification.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

export const UsersRoutesAdapter = (user: UserController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };
    const httpResponse = await user.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

export const AuthenticationRoutesAdapter = (user: AuthenticationController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };
    const httpResponse = await user.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

export const UpdateRoutesAdapter = (user: UpdateUserController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      params: req.params,
      body: req.body,
    };
    const httpResponse = await user.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

export const DeleteRoutesAdapter = (user: DeleteUserController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      params: req.params,
    };
    const httpResponse = await user.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

export const ListRoutesAdapter = (user: ListUserController) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await user.handle();
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

export const GetByIdRoutesAdapter = (user: GetByIdUserController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      params: req.params,
    };
    const httpResponse = await user.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
