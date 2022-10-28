import {
  HttpRequest,
  HttpResponse,
} from "../../../../main/providers/express/http";
import { MissingParamError } from "../../../../shared/errors/missing-params-error";
import { Response } from "../../../../shared/helpers/http-helper";
import { AuthenticationUseCase } from "./authentication-usecase";
import { ValidatorEmailAdapter } from "../../providers/validator/implementations/validator-adapter";

export class AuthenticationController {
  constructor(
    private authenticationUseCase: AuthenticationUseCase,
    private validatorEmail: ValidatorEmailAdapter
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { email } = httpRequest.body;

    if (!email)
      return Response.badRequest(new MissingParamError("Invalid params"));

    if (!this.validatorEmail.isValid(email))
      return Response.badRequest(new MissingParamError(email));

    const create = await this.authenticationUseCase.execute({
      email,
      password: httpRequest.body.password,
    });

    return Response.ok(create);
  }
}
