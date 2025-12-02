import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "../env";
import { PrismaClient } from "../database/src/database/generated/prisma/client";

const connectionString = env.DATABASE_URL

const adapter = new PrismaPg({ connectionString })
export const database = new PrismaClient({ adapter })