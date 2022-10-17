import { IUserRepository } from "../../repositories/Iuser-repository";

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: number) {
    await this.userRepository.deleteById(id);
    return "User deleted";
  }
}
