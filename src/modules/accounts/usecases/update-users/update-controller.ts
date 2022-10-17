import {
  HttpRequest,
  HttpResponse,
} from "../../../main/providers/express/http";
import { MissingParamError } from "../../../shared/errors/missing-params-error";
import { badRequest, ok } from "../../../shared/helpers/http-helper";
import { UpdateUserUseCase } from "./update-usecase";
import { Iencrypt } from "../../../accounts/providers/cryptography/Iencrypt";
import { IvalidatorEmail } from "../../providers/validator/Ivalidator-email";
import { PasswordIsValid } from "../../helpers/password-is-valid";

export class UpdateUserController {
  constructor(
    private updateUserUseCase: UpdateUserUseCase,
    private encrypt: Iencrypt,
    private validatorEmail: IvalidatorEmail,
    private passwordIsValid: PasswordIsValid
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const id = request.params;
    const { name, email, password, driver_license } = request.body;

    if (!this.validatorEmail.isValid(email))
      return badRequest(new MissingParamError(email));

    if (!this.passwordIsValid.validate(password))
      return badRequest(new MissingParamError(password));

    const hashedPassword = await this.encrypt.hash(password);

    const update = await this.updateUserUseCase.execute(parseInt(id.id), {
      name,
      email,
      password: hashedPassword,
      driver_license,
    });

    return ok(update);
  }
}
