import { CreateKnowledgeUseCase } from "./createKnowledgeUseCase";

import { generateEmbedding } from "../../../../infrastructure/utils/openai/embadding";
import { saveKnowledgeRepository } from "../../../../infrastructure/repository/saveKnowledgeRepository/create";

export const createKnowledgeUseCase = new CreateKnowledgeUseCase(saveKnowledgeRepository, generateEmbedding)