import { CreateQuestionUseCase } from "./createQuestion.useCase";
import { cosineSimilarityRepository } from "../../../repository/consineSimilarityRepository";

export const createQuestionUseCase = new CreateQuestionUseCase(cosineSimilarityRepository)