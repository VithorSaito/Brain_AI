import "dotenv/config"

import fastify from "fastify"
import jwt from "@fastify/jwt"
import ws from "@fastify/websocket"

import { routes } from "./src/routes/@.routes"
import { env } from "./src/env"

const Fastify = fastify()

Fastify.register(ws)

Fastify.register(jwt, {
  secret: env.JWT_SECRET
})

Fastify.register(routes)

Fastify.listen({ port: 3333 }, (add, port) => {
  console.log(port)
})