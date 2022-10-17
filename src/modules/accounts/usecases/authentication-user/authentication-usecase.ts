import { MissingParamError } from "../../../shared/errors/missing-params-error";
import { badRequest } from "../../../shared/helpers/http-helper";
import { Idecrypt } from "../../providers/cryptography/Idecrypt";
import { IUserRepository } from "../../repositories/Iuser-repository";

type IRequest = {
  email: string;
  password: string;
};

export class AuthenticationUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly decrypt: Idecrypt
  ) {}

  async execute({ email, password }: IRequest) {
    const user = await this.userRepository.findUserByEmail(email);

    if (!user) return badRequest(new MissingParamError(email));
    const passwordMatched = await this.decrypt.compareHash(
      password,
      user.password
    );

    if (!passwordMatched) return badRequest(new MissingParamError(password));
    return "User authenticated";
  }
}
