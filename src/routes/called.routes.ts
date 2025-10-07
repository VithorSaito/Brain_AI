import { FastifyInstance } from "fastify";

import { calledController } from "../controller/calledController";

export const calledRoutes = async (server: FastifyInstance) => {

  server
    .post("/called", async (request, reply) => {
      const result = await calledController.execute(request, reply)

      return result

    })

} 