import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ApiError } from "./error/ApiError";

export const errorHandler = (server: FastifyInstance) => {

  server.setErrorHandler((err: ApiError, request: FastifyRequest, reply: FastifyReply) => {

    if (err) throw new ApiError(err.statusCode, err.message);

    reply.status(500).send({ message: 'Internal Server Error' });

  })

}