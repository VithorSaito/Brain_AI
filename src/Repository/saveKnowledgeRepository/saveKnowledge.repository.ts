import { KnowLedgeDTO } from "../../dto/knowledgeDTO";
import { poll } from "../../lib/aws";

export class SaveKnowledgeRepository {
  async execute(data: KnowLedgeDTO, embeddingResult: number[]) {

    const result = await poll.query(`
        INSERT INTO knowledge_base (title, category, problem, solution, environment, embedding_context)
        VALUES ($1, $2, $3, $4, $5, $6)
      `,
      [
        data.title,
        data.category,
        data.problem,
        data.solution,
        data.environment,
        `[${embeddingResult}]`,
      ]
    );

    return result.rows

  }
}