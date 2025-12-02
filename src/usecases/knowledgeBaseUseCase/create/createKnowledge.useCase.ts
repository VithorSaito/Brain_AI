import { agent } from "../../../lib/agent";

import { KnowLedgeDTO } from "../../../dto/knowledgeDTO";
import { SaveKnowledgeRepository } from "../../../repository/saveKnowledgeRepository/saveKnowledge.repository";

export class CreateKnowledgeUseCase {
  constructor(private saveKnowledge: SaveKnowledgeRepository) { }

  async execute(data: KnowLedgeDTO) {

    const embeddingResult = await agent.generateEmbadding(`${data}`)

    try {

      const saveInDatabase = this.saveKnowledge.execute(data, embeddingResult)

      return saveInDatabase

    } catch (error) {
      throw new Error("Erro ao salvar conhecimento na base de dados!");
    }

  }
}