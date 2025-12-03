import OpenAI from "openai";
import { env } from "../../env";

export class Agent {
  constructor(private agent: OpenAI) { }

  async generateEmbadding(value: string): Promise<string> {
    const embedding = await this.agent.embeddings.create({
      model: "text-embedding-3-small",
      input: value
    })

    const vectorString = `[${embedding.data[0].embedding.join(", ")}]`

    return vectorString

  }

  async generateResponse(prompt: string): Promise<string> {
    const response = await this.agent.responses.create({
      model: env.GPT_MODEL,
      input: prompt
    })

    return response.output_text
  }
}

