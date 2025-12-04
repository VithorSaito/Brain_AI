import { RegisterDTO } from "../../../../interfaces/dto/registerDTO";
import { BadRequest } from "../../../../shared/errors/BadRequest";
import { RegisterRepository } from "../../../../domain/repositories/authRepository/register/registerRepository";
import { HashPassword } from "../../../../domain/services/hashPasswordService";

export class RegisterUseCase {
  constructor(
    private readonly registerRepository: RegisterRepository,
    private readonly hashPassword: HashPassword
  ) { }

  async execute(data: RegisterDTO, refreshtoken: string) {

    if (!data) throw new BadRequest("Preencha as informações!")

    if (data.username.length < 3) {
      throw new BadRequest("Username deve ter no mínimo 3 caracteres!")
    }

    if (data.password !== data.confirmPassword) {
      throw new BadRequest("Senha está diferente da confirmação de senha!")
    }

    const existingUser = await this.registerRepository.findByEmail(data.email)

    if (existingUser) {
      throw new BadRequest("Email já cadastrado!")
    }

    const salt = 10

    const hashPassword = await this.hashPassword.hash(data.password, salt)

    const result = await this.registerRepository.createLogin({
      ...data,
      password: hashPassword,
    }, refreshtoken)

    return result

  }
}