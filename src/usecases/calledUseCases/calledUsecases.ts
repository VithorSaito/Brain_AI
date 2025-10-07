import { PrismaClient } from "@prisma/client"

import { openai } from "../../lib/openai"

export class CalledUseCase {
  constructor(private database: PrismaClient) { }

  async execute(data: KnowLedgeBaseDTO) {

    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: [data.title, data.category, data.environment, data.problem, data.cause, data.solution, data.status]
    })

    try {

      const response = await this.database.$executeRaw`
      INSERT INTO called ("title", "category", "environment", "problem", "cause", "solution", "status", "embedding")
      VALUES (${data.title}, ${data.category}, ${data.environment}, ${data.problem}, ${data.cause}, ${data.solution}, ${data.status}, ${embedding.data[0].embedding} )
    `
      return response

    } catch (err) {
      console.log(err)
    }

    return
  }
}