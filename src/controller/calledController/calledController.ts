import z from "zod";
import { FastifyReply, FastifyRequest } from "fastify";

import { CalledUseCase } from "../../usecases/calledUseCases/calledUsecases";

export class CalledController {
  constructor(private calledUseCase: CalledUseCase) { }

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

    const result = await this.calledUseCase.execute(bodySchema)

    return reply.send(result).status(201)

  }
}