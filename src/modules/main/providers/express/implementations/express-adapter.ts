import { Request, Response } from "express";
import { CategoriesController } from "../../../../cars/usecases/create-category/categories-controller";
import { SpecificationController } from "../../../../cars/usecases/create-specification.ts/specification-controller";
import { ListCategoriesController } from "../../../../cars/usecases/list-categories/list-categories-controller";
import { UserController } from "../../../../accounts/usecases/create-users/create-users-controller";
import { AuthenticationController } from "../../../../accounts/usecases/authentication-user/authentication-controller";
import { HttpRequest } from "../http";
import { UpdateUserController } from "../../../../accounts/usecases/update-users/update-controller";
import { DeleteUserController } from "../../../../accounts/usecases/delete-users/delete-controller";

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

export const ListRoutesAdapter = (list: ListCategoriesController) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await list.handle();
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
