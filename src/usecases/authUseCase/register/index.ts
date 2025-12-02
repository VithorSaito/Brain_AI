import { RegisterUseCase } from "./register.usecase";
import { registerRepository } from "../../../repository/authRepository/register";

export const regiserUseCase = new RegisterUseCase(registerRepository)