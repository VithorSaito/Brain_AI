import bcrpt from "bcrypt";
import { RegisterDTO } from "../../../dto/registerDTO";
import { RegisterRepository } from "../../../repository/authRepository/register/register.repository";

export class RegisterUseCase {
  constructor(private registerRepository: RegisterRepository) { }

  async execute(data: RegisterDTO, refreshtoken: string) {

    if (data.username.length < 3) {
      throw new Error("Username deve ter no mínimo 3 caracteres!")
    }

    if (data.password !== data.confirmPassword) {
      throw new Error("Senha está diferente da confirmação de senha!")
    }

    const existingUser = await this.registerRepository.findByEmail(data.email)

    if (existingUser) {
      throw new Error("Email já cadastrado!")
    }

    const salt = 10

    const hashPassword = await bcrpt.hash(data.password, salt)

    const result = await this.registerRepository.create({
      ...data,
      password: hashPassword,
    }, refreshtoken)

    return result

  }
}