import { FastifyInstance } from "fastify";

import { calledController } from "../controller/calledController";
import { questionController } from "../controller/questionController";

export const calledRoutes = async (server: FastifyInstance) => {

  server
    .post("/knowledge", async (request, reply) => {
      const result = await calledController.execute(request, reply)

      return result

    })
    .post("/question", async (request, reply) => {
      const result = await questionController.execute(request, reply)

      return result
    })
} 