import { CreateKnowledgeBaseController } from "./createKnowledgeBaseController";
import { createKnowledgeBaseUseCase } from "../../../usecases/knowledgeBaseUseCase/create";

export const createKnowledgeBaseController = new CreateKnowledgeBaseController(createKnowledgeBaseUseCase)