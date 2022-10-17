import { IUserRepository } from "../../../repositories/Iuser-repository";

export class ListAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    const users = await this.userRepository.listAll();

    return users;
  }
}
