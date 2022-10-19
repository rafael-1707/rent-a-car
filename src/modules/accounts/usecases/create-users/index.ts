import { UsersUseCase } from "./create-users-usecase";
import { UserController } from "./create-users-controller";
import { PrismaUsersRepository } from "../../repositories/implementations/users-repository";
import { BcryptAdapter } from "../../providers/cryptography/implementations/bcrypt-hash-adapter";
import { ValidatorEmailAdapter } from "../../providers/validator/implementations/validator-adapter";
import { PasswordIsValid } from "../../helpers/password-is-valid";

const usersRepository = new PrismaUsersRepository();
const bcryptAdapter = new BcryptAdapter(12);
const usersUseCase = new UsersUseCase(usersRepository, bcryptAdapter);
const validatorEmailAdapter = new ValidatorEmailAdapter();
const passwordIsValid = new PasswordIsValid();
const userController = new UserController(
  usersUseCase,
  validatorEmailAdapter,
  passwordIsValid
);

export { userController };
