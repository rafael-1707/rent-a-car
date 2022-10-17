import { AuthenticationUseCase } from "./authentication-usecase";
import { AuthenticationController } from "./authentication-controller";
import { PrismaUsersRepository } from "../../repositories/implementations/users-repository";
import { BcryptCompareAdapter } from "../../providers/cryptography/implementations/bcrypt-compare-adapter";
import { ValidatorEmailAdapter } from "../../providers/validator/implementations/validator-adapter";

const usersRepository = new PrismaUsersRepository();
const bcryptCompareAdapter = new BcryptCompareAdapter(12);
const validatorEmail = new ValidatorEmailAdapter();
const authenticationUseCase = new AuthenticationUseCase(
  usersRepository,
  bcryptCompareAdapter
);
const authenticationController = new AuthenticationController(
  authenticationUseCase,
  validatorEmail
);

export { authenticationController };
