import { FastifyInstance } from "fastify";

import { createQuestionController } from "../controller/questionController/create";
import { createKnowledgeController } from "../controller/knowledgeBaseController/create";

export const calledRoutes = async (server: FastifyInstance) => {

  server
    .post("/knowledge", async (request, reply) => {
      const result = await createKnowledgeController.execute(request, reply)

      return result

    })
    .get("/question", { websocket: true }, async (websocket, request) => {
      const result = await createQuestionController.execute(websocket, request)

      return result
    })

} 