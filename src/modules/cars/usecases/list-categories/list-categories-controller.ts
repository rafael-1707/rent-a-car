import { Response } from "../../../../shared/helpers/http-helper";
import { HttpResponse } from "../../../../main/providers/express/http";
import { ListCategoriesUseCase } from "./list-categories-usecase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(): Promise<HttpResponse> {
    const categories = await this.listCategoriesUseCase.execute();
    return Response.ok({ categories });
  }
}
