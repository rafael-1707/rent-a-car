import { MissingParamError } from "../../../shared/errors/missing-params-error";
import { badRequest } from "../../../shared/helpers/http-helper";
import { Idecrypt } from "../../providers/cryptography/Idecrypt";
import { IUserRepository } from "../../repositories/Iuser-repository";
import { IToken } from "../../providers/token/Itoken";

type IRequest = {
  email: string;
  password: string;
};

export class AuthenticationUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly decrypt: Idecrypt,
    private readonly token: IToken
  ) {}

  async execute({ email, password }: IRequest) {
    const user = await this.userRepository.findUserByEmail(email);

    if (!user) return badRequest(new MissingParamError(email));

    const passwordMatched = await this.decrypt.compareHash(
      password,
      user.password
    );

    if (!passwordMatched) return badRequest(new MissingParamError(password));

    const userId = user.id?.toString();
    const token = this.token.generateToken(userId as string, email);

    return {
      user: {
        id: user.id,
        email: user.email,
      },
      token,
    };
  }
}
