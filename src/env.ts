import z from "zod";

export const env = z.object({
  OPENAI_API_KEY: z.string(),
  DATABASE_URL: z.string(),
  AWS_DB_HOST: z.string(),
  AWS_DB_USER: z.string(),
  AWS_DB_PASSWORD: z.string(),
  AWS_DB_NAME: z.string()
}).parse(process.env)