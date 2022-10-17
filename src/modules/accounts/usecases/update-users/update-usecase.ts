import { EmailExistsError } from "../../../shared/errors/users-exists-error";
import { badRequest } from "../../../shared/helpers/http-helper";
import { IUserRepository } from "../../repositories/Iuser-repository";

type IRequest = {
  name: string;
  email: string;
  password: string;
  driver_license: string;
};

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: number, data: IRequest) {
    const user = await this.userRepository.findUserByEmail(data.email);

    if (user) {
      return badRequest(new EmailExistsError(data.email));
    }

    await this.userRepository.updateById(id, data);
    return "updated";
  }
}
