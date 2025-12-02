import { FastifyReply, FastifyRequest } from "fastify";
import { RegisterDTO } from "../../../dto/registerDTO";
import { RegisterUseCase } from "../../../usecases/authUseCase/register/register.usecase";

export class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) { }

  async execute(request: FastifyRequest, reply: FastifyReply) {

    const data = request.body as RegisterDTO
    const acessToken = await reply.jwtSign({ username: data.username }, { expiresIn: "15m" })
    const refreshToken = await reply.jwtSign({ username: data.username }, { expiresIn: "7d" })

    const result = await this.registerUseCase.execute(data, refreshToken)


    return reply.send({
      acessToken,
      refreshToken,
      username: result.username
    }).status(201)

  }
}