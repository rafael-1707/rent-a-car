import {
  HttpRequest,
  HttpResponse,
} from "../../../../main/providers/express/http";
import { CreateSpecificationService } from "./specification-usecase";
import { badRequest, created } from "../../../../shared/helpers/http-helper";
import { MissingParamError } from "../../../../shared/errors/missing-params-error";

export class SpecificationController {
  constructor(private createSpecificationService: CreateSpecificationService) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const requireFields = ["name", "description"];
    for (const key of requireFields) {
      if (!request.body[key]) {
        return badRequest(new MissingParamError(key));
      }
    }

    const { name, description } = request.body;
    const create = await this.createSpecificationService.execute({
      name,
      description,
    });

    return created(create);
  }
}