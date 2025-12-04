import "dotenv/config"

import fastify from "fastify"
import { makeDependencies } from "./makeDependencies"
import { registerPlugins } from "./registerPlugins"
import { registerRoutes } from "./registerRoutes"

async function server() {

  const app = fastify()

  await makeDependencies()

  registerPlugins(app)
  registerRoutes(app)

  app.listen({ port: 3333 }, (add, port) => {
    console.log(`Server running on port ${port}`)
  })

}

server()