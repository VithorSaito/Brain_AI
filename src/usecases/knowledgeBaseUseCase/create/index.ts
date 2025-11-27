import { saveKnowledgeRepository } from "../../../repository/saveKnowledgeRepository";
import { CreateKnowledgeUseCase } from "./createKnowledge.useCase";

export const createKnowledgeUseCase = new CreateKnowledgeUseCase(saveKnowledgeRepository)