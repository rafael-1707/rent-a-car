import { IUserRepository } from "../../repositories/Iuser-repository";
import { EmailExistsError } from "../../../shared/errors/users-exists-error";
import { Iencrypt } from "../../providers/cryptography/Iencrypt";

type IRequest = {
  name: string;
  email: string;
  password: string;
  driver_license: string;
};

export class UsersUseCase {
  constructor(
    private userRepository: IUserRepository,
    private encrypt: Iencrypt
  ) {}

  async execute({ name, email, password, driver_license }: IRequest) {
    const emailAlreadyExists = await this.userRepository.findByEmail(email);
    if (emailAlreadyExists) return new EmailExistsError(email);

    const hashedPassword = await this.encrypt.hash(password);

    const create = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      driver_license,
    });

    return "User created";
  }
}
