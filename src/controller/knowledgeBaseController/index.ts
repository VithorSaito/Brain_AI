import { knowledgeBaseUseCase } from "../../usecases/knowledgeBaseUseCase";
import { KnowledgeBaseController } from "./knowledgeBaseController";

export const knowledgeBaseController = new KnowledgeBaseController(knowledgeBaseUseCase)