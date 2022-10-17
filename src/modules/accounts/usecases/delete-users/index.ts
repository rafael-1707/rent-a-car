import { PrismaUsersRepository } from "../../repositories/implementations/users-repository";
import { DeleteUserUseCase } from "./delete-usecase";
import { DeleteUserController } from "./delete-controller";

const prismaUsersRepository = new PrismaUsersRepository();
const deleteUserUseCase = new DeleteUserUseCase(prismaUsersRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };
