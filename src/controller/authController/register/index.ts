import { regiserUseCase } from "../../../usecases/authUseCase/register";
import { RegisterController } from "./register.controller";

export const registerController = new RegisterController(regiserUseCase)