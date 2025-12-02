import { PrismaClient } from "../../../database/src/database/generated/prisma/client";
import { RegisterDTO } from "../../../dto/registerDTO";

export class RegisterRepository {
  constructor(private database: PrismaClient) { }

  async findByEmail(email: string) {

    const result = await this.database.users.findUnique({
      where: {
        email: email
      }
    })
    return result
  }

  async create(data: Omit<RegisterDTO, "confirmPassword">, refreshToken: string) {

    const result = await this.database.users.create({
      data: {
        email: data.email,
        username: data.username,
        password: data.password,
        refreshToken
      }
    })

    return result

  }
}