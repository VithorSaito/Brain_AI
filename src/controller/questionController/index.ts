import { questionUseCase } from "../../usecases/questionUseCase";
import { QuestionController } from "./questionController";

export const questionController = new QuestionController(questionUseCase)