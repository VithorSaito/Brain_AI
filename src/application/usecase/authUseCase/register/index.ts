import { RegisterUseCase } from "./registerUsecase";
import { hashCrypto } from "../../../../infrastructure/utils/bcrypt/hash";
import { registerRepository } from "../../../../infrastructure/repository/authRepository/register";

export const registerUseCase = new RegisterUseCase(registerRepository, hashCrypto)