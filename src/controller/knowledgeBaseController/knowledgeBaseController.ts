import z from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { KnowledgeBaseUseCase } from "../../usecases/knowledgeBaseUseCase/knowledgeBaseUsecase";


export class KnowledgeBaseController {
  constructor(private knowledgeBaseUseCase: KnowledgeBaseUseCase) { }

  async execute(request: FastifyRequest, reply: FastifyReply) {

    const bodySchema = z.object({
      title: z.string(),
      category: z.string(),
      environment: z.string(),
      problem: z.string(),
      cause: z.string(),
      solution: z.string(),
      status: z.string()
    }).parse(request.body)

    const result = await this.knowledgeBaseUseCase.execute(bodySchema)

    return reply.send(result).status(201)

  }
}