import z from "zod";
import { FastifyReply, FastifyRequest } from "fastify";

import { CreateQuestionUseCase } from "../../../usecases/questionUseCase/create/createQuestion.useCase";

export class CreateQuestionController {
  constructor(private createQuestionUseCase: CreateQuestionUseCase) { }

  async execute(request: FastifyRequest, reply: FastifyReply) {

    const bodySchema = z.object({
      question: z.string()
    }).parse(request.body)

    const result = await this.createQuestionUseCase.execute(bodySchema.question)

    return reply.send(result).code(200)

  }
}