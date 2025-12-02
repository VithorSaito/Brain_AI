import { PrismaClient } from "../../database/src/database/generated/prisma/client";
import { KnowLedgeDTO } from "../../dto/knowledgeDTO";

export class CosineSimilarityRepository {
  constructor(private database: PrismaClient) { }

  async execute(embeddingQuestion: string) {

    const result: KnowLedgeDTO[] = await this.database.$queryRaw`
      SELECT id,
            title,
            problem,
            solution,
            1 - (embedding_context <=> ${embeddingQuestion}) AS similarity
      FROM knowledge
      WHERE solution != ''
      ORDER BY similarity DESC
      LIMIT 7;
    `

    return result
  }
}