import { LoginUseCase } from "./loginUsecase";
import { loginRepository } from "../../../../infrastructure/repository/authRepository/login";
import { comparerCrypto } from "../../../../infrastructure/utils/bcrypt/comparer";

export const loginUseCase = new LoginUseCase(loginRepository, comparerCrypto)