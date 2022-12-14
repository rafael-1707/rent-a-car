import {
  HttpRequest,
  HttpResponse,
} from "../../../../main/providers/express/http";
import { MissingParamError } from "../../../../shared/errors/missing-params-error";
import { Response } from "../../../../shared/helpers/http-helper";
import { DeleteUserUseCase } from "./delete-usecase";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const id = request.params;

      const user = await this.deleteUserUseCase.execute(parseInt(id.id));
      return Response.NoContent();
    } catch (error) {
      return Response.badRequest(new MissingParamError("id"));
    }
  }
}
