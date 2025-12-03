import { createClient, RedisClientType } from "redis";

export const redis = createClient() as RedisClientType

redis.on("error", (err) => console.log("Redis Client Error", err));
