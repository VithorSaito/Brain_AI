import { PrismaClient } from "../../../database/src/generated/prisma/client";

export class LoginRepository {
  constructor(private database: PrismaClient) { }

  async refreshToken(userId: string, refreshToken: string) {



  }

}