import { FastifyInstance } from "fastify"
import auth from "../infrastructure/plugin/auth"
import { errorHandler } from "../shared/errors/ErrorHandler"

export function registerRoutes(app: FastifyInstance) {

  auth(app)
  errorHandler(app)

}