import { PrismaUsersRepository } from "../../../repositories/implementations/users-repository";
import { ListAllUsersUseCase } from "./list-usecase";
import { ListUserController } from "./list-controller";

const prismaUsersRepository = new PrismaUsersRepository();
const listAllUsersUseCase = new ListAllUsersUseCase(prismaUsersRepository);
const listAllUsersController = new ListUserController(listAllUsersUseCase);

export { listAllUsersController };
