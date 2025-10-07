import { FastifyInstance } from "fastify";

import { calledRoutes } from "./called.routes";

export const routes = async (server: FastifyInstance) => {

  server.register(calledRoutes)
} 