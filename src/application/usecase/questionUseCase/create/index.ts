import { CreateQuestionUseCase } from "./createQuestionUseCase";

import { getCache } from "../../../../infrastructure/utils/cache/get";
import { setCache } from "../../../../infrastructure/utils/cache/set";
import { generateResponse } from "../../../../infrastructure/utils/openai/response";
import { generateEmbedding } from "../../../../infrastructure/utils/openai/embadding";
import { cosineSimilarityRepository } from "../../../../infrastructure/repository/consineSimilarityRepository/create";

export const createQuestionUseCase = new CreateQuestionUseCase(
  cosineSimilarityRepository,
  generateEmbedding,
  generateResponse,
  getCache,
  setCache
)