import { Pool } from "pg"
import { env } from "../env"

export const poll = new Pool({
  host: env.AWS_DB_HOST,
  port: 5432,
  user: env.AWS_DB_USER,
  password: env.AWS_DB_PASSWORD,
  database: env.AWS_DB_NAME,
  ssl: false
})

