import { compare } from "bcrypt";
import { LoginRepository } from "../../../repository/authRepository/login/login.repository";
import { Unauthorized } from "../../../middleware/error/Unauthorized";

export class LoginUseCase {
  constructor(private loginRepository: LoginRepository) { }

  async execute(email: string, password: string) {

    const findUser = await this.loginRepository.findUser(email);

    if (!findUser) {
      throw new Unauthorized("Senha ou Email inválidos!");
    }

    const validatePassword = await compare(password, findUser.password);

    if (!validatePassword) {
      throw new Unauthorized("Senha ou Email inválidos!");
    }

    return findUser.username

  }
}