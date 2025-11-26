import { createQuestionUseCase } from "../../../usecases/questionUseCase/create";
import { CreateQuestionController } from "./createQuestionController";

export const createQuestionController = new CreateQuestionController(createQuestionUseCase)