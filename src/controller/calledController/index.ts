import { CalledController } from "./calledController";
import { calledUseCase } from "../../usecases/calledUseCases";

export const calledController = new CalledController(calledUseCase)