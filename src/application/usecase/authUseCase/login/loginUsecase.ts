import { Unauthorized } from "../../../../shared/errors/Unauthorized";
import { HashComparer } from "../../../../domain/services/hashComparerService";
import { LoginRepository } from "../../../../domain/repositories/authRepository/login/loginRepository";

export class LoginUseCase {
  constructor(
    private readonly loginRepository: LoginRepository,
    private readonly hashComparar: HashComparer
  ) { }

  async execute(email: string, password: string) {

    const findUser = await this.loginRepository.findUser(email);

    if (!findUser) {
      throw new Unauthorized("Senha ou Email inválidos!");
    }

    const validatePassword = await this.hashComparar.compare(password, findUser.password);

    if (!validatePassword) {
      throw new Unauthorized("Senha ou Email inválidos!");
    }

    return findUser.username

  }
}