import { agent } from "../../../lib/agent"
import { Prompts } from "../../../prompts"
import { KnowLedgeDTO } from "../../../dto/knowledgeDTO"
import { CosineSimilarityRepository } from "../../../repository/consineSimilarityRepository/consineSimilarity.repository"

export class CreateQuestionUseCase {
  constructor(private cosineSimilarity: CosineSimilarityRepository) { }

  async execute(message: string) {

    var format: string[] = []

    const embeddingQuestion = await agent.generateEmbadding(message.toString())
    const cosineSimilarity = await this.cosineSimilarity.execute(embeddingQuestion)

    cosineSimilarity.map((val: KnowLedgeDTO) => {

      if (val.problem == '') {

        format.push(`
          Problema: ${val.title}
          Solução: ${val.solution}
          `)

      } else {

        format.push(`
        titulo: ${val.title}
        Problema: ${val.problem}
        Solução: ${val.solution}
        `)
      }

    })

    const prompt = Prompts.rag(format, message.toString())
    const response = await agent.generateResponse(prompt)

    return response

  }
}