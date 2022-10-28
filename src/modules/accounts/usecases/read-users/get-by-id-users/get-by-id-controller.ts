import {
  HttpRequest,
  HttpResponse,
} from "../../../../../main/providers/express/http";
import { Response } from "../../../../../shared/helpers/http-helper";
import { GetByIdUserUseCase } from "./get-by-id-usecase";

export class GetByIdUserController {
  constructor(private getByIdUserUseCase: GetByIdUserUseCase) {}
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const id = request.params;
    const users = await this.getByIdUserUseCase.execute(parseInt(id.id));

    return Response.ok(users);
  }
}
