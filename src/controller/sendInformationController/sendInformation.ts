import { FastifyReply, FastifyRequest } from "fastify";
import { SendInformationUseCase } from "../../usecases/sendInformationUseCase/sendInformationUseCase";
import z from "zod";

export class SendInformationController {
  constructor(private sendInformationUseCase: SendInformationUseCase) { }

  async execute(request: FastifyRequest, reply: FastifyReply) {

    const bodySchema = z.object({
      question: z.string()
    }).parse(request.body)

    const result = await this.sendInformationUseCase.execute(bodySchema.question)

    return reply.send(result).code(200)

  }
}