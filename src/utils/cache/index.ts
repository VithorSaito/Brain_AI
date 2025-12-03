import { Cache } from "./cache";
import { redis } from "../../lib/redis";

export const cache = new Cache(redis)
