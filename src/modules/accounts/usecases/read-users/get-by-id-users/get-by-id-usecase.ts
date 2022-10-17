import { IUserRepository } from "../../../repositories/Iuser-repository";

export class GetByIdUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: number) {
    const users = await this.userRepository.findById(id);

    return users;
  }
}
