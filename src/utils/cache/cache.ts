import { RedisClientType } from "redis";

export class Cache {
  constructor(private cacheService: RedisClientType) { }

  async getCache(username: string): Promise<string | null> {

    const result = await this.cacheService.get(username);
    return result;

  }

  async setCache(username: string, prompt: string, response: string): Promise<string | null> {

    const result = await this.cacheService.set(username, `Prompt: ${prompt}, Resposta: ${response}`, { expiration: { type: "EX", value: 60 * 30 } })

    return result

  }
}
