import {
  HttpRequest,
  HttpResponse,
} from "../../../../main/providers/express/http";
import { ok } from "../../../../shared/helpers/http-helper";
import { ListAllUsersUseCase } from "./list-usecase";

export class ListUserController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}
  async handle(): Promise<HttpResponse> {
    const users = await this.listAllUsersUseCase.execute();

    return ok(users);
  }
}
