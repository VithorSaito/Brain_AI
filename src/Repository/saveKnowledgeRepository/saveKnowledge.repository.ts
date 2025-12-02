import { PrismaClient } from "../../database/src/generated/prisma/client";
import { KnowLedgeDTO } from "../../dto/knowledgeDTO";

export class SaveKnowledgeRepository {
  constructor(private database: PrismaClient) { }

  async execute(data: KnowLedgeDTO, embeddingResult: string) {

    const result = await this.database.$queryRaw`
      INSERT INTO knowledge (
        title,
        category,
        problem,
        solution,
        environment,
        embedding_context
      )
      VALUES (
        ${data.title},
        ${data.category},
        ${data.problem},
        ${data.solution},
        ${data.environment},
        ${embeddingResult}::vector
      )
    `
    return result

  }
}