import "dotenv/config"

import fastify from "fastify"
import ws from "@fastify/websocket"

import { routes } from "./src/routes/@.routes"

const Fastify = fastify()

Fastify.register(ws)

Fastify.register(routes)

Fastify.listen({ port: 3333 }, (add, port) => {
  console.log(port)
})