import { FastifyInstance } from "fastify";
import { registerController } from "../controller/authController/register";


export const authRoutes = async (server: FastifyInstance) => {

  server
    .post("/register", async (request, reply) => {

      const result = await registerController.execute(request, reply)

      return result

    })


} 