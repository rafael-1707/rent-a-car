import { created } from "../../../../shared/helpers/http-helper";
import {
  HttpRequest,
  HttpResponse,
} from "../../../../main/providers/express/http";
import { ImportCategoryUseCase } from "./import-category-usecase";

export class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { file } = request;

    this.importCategoryUseCase.execute(file);
    return created("Import done");
  }
}
