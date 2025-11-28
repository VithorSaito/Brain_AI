import { WebSocket } from "ws";
import { FastifyRequest } from "fastify";

import { CreateQuestionUseCase } from "../../../usecases/questionUseCase/create/createQuestion.useCase";

export class CreateQuestionController {
  constructor(private createQuestionUseCase: CreateQuestionUseCase) { }

  async execute(socket: WebSocket, request: FastifyRequest) {

    socket.on("message", async (message) => {

      const text = message.toString()

      const result = await this.createQuestionUseCase.execute(text)

      socket.send(result)

    })

  }
}