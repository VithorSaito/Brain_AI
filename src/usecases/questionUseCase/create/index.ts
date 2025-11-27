import { knowledgeBaseRepository } from "../../../repository/consineSimilarityRepository";
import { CreateQuestionUseCase } from "./createQuestion.useCase";

export const createQuestionUseCase = new CreateQuestionUseCase(knowledgeBaseRepository)