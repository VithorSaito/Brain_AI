import { createQuestionUseCase } from "../../../usecases/questionUseCase/create";
import { CreateQuestionController } from "./createQuestion.controller";

export const createQuestionController = new CreateQuestionController(createQuestionUseCase)