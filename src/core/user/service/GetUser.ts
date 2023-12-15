import CasoDeUso from "../../shared/CasoDeUso";
import User from "../model/User";
import RepoUser from "./RepoUserPrisma";

export default class GetUser implements CasoDeUso<number, User | void>{

  constructor(private readonly prisma: RepoUser){}


  async execut(data: number): Promise<User | void> {
    return await this.prisma.getUSerNumber(data) 
  }


}