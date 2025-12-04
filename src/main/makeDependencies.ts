import { redis } from "../infrastructure/external/redis";

export async function makeDependencies() {

  await redis.connect()

  return
}