import { FastifyInstance } from "fastify";

import { calledController } from "../controller/calledController";
import { sendInformationController } from "../controller/sendInformationController";

export const calledRoutes = async (server: FastifyInstance) => {

  server
    .post("/knowledge", async (request, reply) => {
      const result = await calledController.execute(request, reply)

      return result

    })
    .post("/send_information", async (request, reply) => {
      const result = await sendInformationController.execute(request, reply)

      return result
    })
} 