import { FastifyInstance } from "fastify";

import { authRoutes } from "./auth.routes";
import { calledRoutes } from "./called.routes";

export const routes = async (server: FastifyInstance) => {

  server.register(calledRoutes)
  server.register(authRoutes)
} 