import { CreateKnowledgeController } from "./createKnowledge.controller";
import { createKnowledgeUseCase } from "../../../usecases/knowledgeBaseUseCase/create";

export const createKnowledgeController = new CreateKnowledgeController(createKnowledgeUseCase)