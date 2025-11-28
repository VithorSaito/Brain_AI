import { poll } from "../../lib/aws";

export class CosineSimilarityRepository {

  async execute(embeddingQuestion: number[]) {

    const result = await poll.query(`
            SELECT id,
            title,
            problem,
            solution,
            1 - (embedding_context <=> $1) AS similarity
            FROM knowledge_base
            WHERE solution != ''
            ORDER BY similarity DESC
            LIMIT 7;
            `,
      [`[${embeddingQuestion.join(',')}]`]
    )

    return result.rows
  }
}