import { PrismaUsersRepository } from "../../repositories/implementations/users-repository";
import { UpdateUserUseCase } from "./update-usecase";
import { UpdateUserController } from "./update-controller";
import { BcryptAdapter } from "../../providers/cryptography/implementations/bcrypt-hash-adapter";
import { ValidatorEmailAdapter } from "../../providers/validator/implementations/validator-adapter";
import { PasswordIsValid } from "../../helpers/password-is-valid";

const prismaUsersRepository = new PrismaUsersRepository();
const updateUserUseCase = new UpdateUserUseCase(prismaUsersRepository);
const bcryptAdapter = new BcryptAdapter(12);
const validatorEmailAdapter = new ValidatorEmailAdapter();
const passwordIsValid = new PasswordIsValid();
const updateUserController = new UpdateUserController(
  updateUserUseCase,
  bcryptAdapter,
  validatorEmailAdapter,
  passwordIsValid
);

export { updateUserController };
