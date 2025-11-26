import { poll } from "../../../lib/aws"
import { openai } from "../../../lib/openai"

interface RowsResponse {
  id: number,
  campo: string,
  similarity: string
}

export class CreateQuestionUseCase {
  constructor() { }

  async execute(question: string) {

    const embeddingQuestion = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: question
    })

    const cosineSimilarity = await poll.query(`
      SELECT id, title AS campo, 1 - (embedding_title <=> $1) AS similarity
      FROM called
      UNION ALL
      SELECT id, problem, 1 - (embedding_problem <=> $1)
      FROM called
      UNION ALL
      SELECT id, solution, 1 - (embedding_solution <=> $1)
      FROM called
      ORDER BY similarity DESC
      LIMIT 5;
      `,
      [
        `[${embeddingQuestion.data[0].embedding.join(',')}]`,
      ]
    )

    const context = cosineSimilarity.rows.map((val: RowsResponse) => {
      return val.campo
    })

    const prompt = `
    Você é um assistente que responde com base nas informações abaixo:
    Contexto:
    ${context}

    Pergunta do usuário:
    ${question}

    Responda de forma clara e direta.
    `

    const response = await openai.responses.create({
      model: 'gpt-5-nano',
      input: prompt
    })

    return response.output_text
  }
}