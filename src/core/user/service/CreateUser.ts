import CasoDeUso from "../../shared/CasoDeUso";
import User from "../model/User";
import RepoUser from "./RepoUserPrisma";

export default class CreateUSer implements CasoDeUso<User, void | string>{

  constructor(private readonly prismaRepo: RepoUser) { }

  async execut(data: User): Promise<void | string> {
    const { name, number } = data

    const exiteUser = await this.prismaRepo.getUSerNumber(number)

    if (exiteUser) {
      throw new Error('user existe')
    }

    await this.prismaRepo.create({ name, number })
  }

}