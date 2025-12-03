import "dotenv/config"

import fastify from "fastify"
import ws from "@fastify/websocket"

import auth from "./src/plugin/auth"
import { routes } from "./src/routes/@.routes"
import { errorHandler } from "./src/errors/ErrorHandler"
import { redis } from "./src/lib/redis"

const Fastify = fastify()

auth(Fastify)
errorHandler(Fastify)

await redis.connect();

Fastify.register(ws)

Fastify.register(routes)

Fastify.listen({ port: 3333 }, (add, port) => {
  console.log(port)
})