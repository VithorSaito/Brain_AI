import { KnowLedgeDTO } from "../../../dto/knowledgeDTO"
import { cache } from "../../../utils/cache"
import { agent } from "../../../lib/agent"
import { Prompts } from "../../../prompts"
import { CosineSimilarityRepository } from "../../../repository/consineSimilarityRepository/consineSimilarity.repository"

export class CreateQuestionUseCase {
  constructor(private cosineSimilarity: CosineSimilarityRepository) { }

  async execute(message: string, username: string) {

    const history = await cache.getCache(username)

    const embeddingQuestion = await agent.generateEmbadding(message.toString())

    const cosineSimilarity = await this.cosineSimilarity.execute(embeddingQuestion)

    var formated: string[] = []

    cosineSimilarity.map((val: KnowLedgeDTO) => {

      if (val.problem == '') {

        formated.push(`
          Problema: ${val.title}
          Solução: ${val.solution}
          `)

      } else {

        formated.push(`
        titulo: ${val.title}
        Problema: ${val.problem}
        Solução: ${val.solution}
        `)
      }

    })

    const prompt = history ? Prompts.history(history, message.toString()) : Prompts.rag(formated, message.toString())

    try {
      const response = await agent.generateResponse(prompt)

      await cache.setCache(username, prompt, response)

      return response
    }
    catch (err) {
      throw new Error("Erro ao gerar resposta!");
    }

  }
}