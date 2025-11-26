import { FastifyInstance } from "fastify";

import { createQuestionController } from "../controller/questionController/create";
import { createKnowledgeBaseController } from "../controller/knowledgeBaseController/create";

export const calledRoutes = async (server: FastifyInstance) => {

  server
    .post("/knowledgeBase", async (request, reply) => {
      const result = await createKnowledgeBaseController.execute(request, reply)

      return result

    })
    .post("/question", async (request, reply) => {
      const result = await createQuestionController.execute(request, reply)

      return result
    })
} 