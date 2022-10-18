import { AuthenticationUseCase } from "./authentication-usecase";
import { AuthenticationController } from "./authentication-controller";
import { PrismaUsersRepository } from "../../repositories/implementations/users-repository";
import { BcryptCompareAdapter } from "../../providers/cryptography/implementations/bcrypt-compare-adapter";
import { ValidatorEmailAdapter } from "../../providers/validator/implementations/validator-adapter";
import { JwtToken } from "../../providers/token/implementations/jwt";

import dotenv from "dotenv";
dotenv.config();

const usersRepository = new PrismaUsersRepository();
const bcryptCompareAdapter = new BcryptCompareAdapter(12);
const validatorEmail = new ValidatorEmailAdapter();
const jwtToken = new JwtToken(
  process.env.JWT_SECRET as string,
  process.env.EXPIRES_IN as string
);
const authenticationUseCase = new AuthenticationUseCase(
  usersRepository,
  bcryptCompareAdapter,
  jwtToken
);
const authenticationController = new AuthenticationController(
  authenticationUseCase,
  validatorEmail
);

export { authenticationController };
