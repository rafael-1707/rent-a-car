import { MissingParamError } from "../../../../shared/errors/missing-params-error";
import { badRequest, created } from "../../../../shared/helpers/http-helper";
import {
  HttpRequest,
  HttpResponse,
} from "../../../../main/providers/express/http";
import { UsersUseCase } from "./create-users-usecase";
import { IvalidatorEmail } from "../../providers/validator/Ivalidator-email";
import { PasswordIsValid } from "../../helpers/password-is-valid";

export class UserController {
  constructor(
    private usersUseCase: UsersUseCase,
    private validatorEmail: IvalidatorEmail,
    private passwordIsValid: PasswordIsValid
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const requireFields = ["name", "email", "password", "driver_license"];
    for (const key of requireFields) {
      if (!request.body[key]) {
        return badRequest(new MissingParamError(key));
      }
    }

    const { name, email, password, driver_license } = request.body;

    if (!this.validatorEmail.isValid(email))
      return badRequest(new MissingParamError(email));

    if (!this.passwordIsValid.validate(password)) {
      return badRequest(new MissingParamError(password));
    }

    const create = await this.usersUseCase.execute({
      name,
      email,
      password,
      driver_license,
    });

    return created(create);
  }
}
