import { FastifyInstance } from "fastify";

import { questionController } from "../controller/questionController";
import { knowledgeBaseController } from "../controller/knowledgeBaseController";

export const calledRoutes = async (server: FastifyInstance) => {

  server
    .post("/knowledgeBase", async (request, reply) => {
      const result = await knowledgeBaseController.execute(request, reply)

      return result

    })
    .post("/question", async (request, reply) => {
      const result = await questionController.execute(request, reply)

      return result
    })
} 