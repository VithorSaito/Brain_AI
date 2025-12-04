import { GenerateEmbadding } from "../../../../domain/services/generateEmbaddingService";
import { SaveKnowledgeRepository } from "../../../../infrastructure/repository/saveKnowledgeRepository/create/saveKnowledgeRepository";
import { KnowLedgeDTO } from "../../../../interfaces/dto/knowledgeDTO";
import { InternalError } from "../../../../shared/errors/InternalError";

export class CreateKnowledgeUseCase {
  constructor(
    private readonly saveKnowledge: SaveKnowledgeRepository,
    private readonly generateEmbedding: GenerateEmbadding
  ) { }

  async execute(data: KnowLedgeDTO) {

    const embeddingResult = await this.generateEmbedding.execute(`${data}`)

    try {

      const saveInDatabase = this.saveKnowledge.execute(data, embeddingResult)

      return saveInDatabase

    } catch (error) {
      throw new InternalError("Erro ao salvar conhecimento na base de dados!");
    }

  }
}