import { PrismaUsersRepository } from "../../../repositories/implementations/users-repository";
import { GetByIdUserUseCase } from "./get-by-id-usecase";
import { GetByIdUserController } from "./get-by-id-controller";

const prismaUsersRepository = new PrismaUsersRepository();
const getByIdUserUseCase = new GetByIdUserUseCase(prismaUsersRepository);
const getByIdUserController = new GetByIdUserController(getByIdUserUseCase);

export { getByIdUserController };
