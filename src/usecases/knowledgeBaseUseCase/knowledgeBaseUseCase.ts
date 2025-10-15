import { poll } from "../../lib/aws"
import { openai } from "../../lib/openai"

export class KnowledgeBaseUseCase {
  constructor() { }

  async execute(data: KnowLedgeBaseDTO) {

    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: [data.title, data.category, data.environment, data.problem, data.cause, data.solution]
    })

    try {

      const saveInDatabase = await poll.query(`
        INSERT INTO called (title, category, environment, problem, cause, solution, status, embedding_title, embedding_category, embedding_environment, embedding_problem, embedding_cause, embedding_solution)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      `,
        [
          data.title,
          data.category,
          data.environment,
          data.problem,
          data.cause,
          data.solution,
          data.status,
          `[${embedding.data[0].embedding.join(',')}]`,
          `[${embedding.data[1].embedding.join(',')}]`,
          `[${embedding.data[2].embedding.join(',')}]`,
          `[${embedding.data[3].embedding.join(',')}]`,
          `[${embedding.data[4].embedding.join(',')}]`,
          `[${embedding.data[5].embedding.join(',')}]`,
        ]
      );

      return saveInDatabase.rowCount

    } catch (err) {

      throw new Error(`${err}`)

    }
  }
}