import { FastifyReply, FastifyRequest } from "fastify";
import { QuestionUseCase } from "../../usecases/questionUseCase/questionUseCase";
import z from "zod";

export class QuestionController {
  constructor(private questionUseCase: QuestionUseCase) { }

  async execute(request: FastifyRequest, reply: FastifyReply) {

    const bodySchema = z.object({
      question: z.string()
    }).parse(request.body)

    const result = await this.questionUseCase.execute(bodySchema.question)

    return reply.send(result).code(200)

  }
}